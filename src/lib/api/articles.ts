/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Article, BreakingNews } from "./types";

const API_URL = process.env.API_URL;


async function fetchJson<T>(path: string): Promise<T> {
  if (!API_URL) {
    throw new Error("Missing API_URL environment variable.");
  }
  const bypassToken = process.env.BYPASS_TOKEN;

  if (!bypassToken) {
    throw new Error("Missing BYPASS_TOKEN environment variable.");
  }

  const url = `${API_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      "x-vercel-protection-bypass": bypassToken,
    },
  });

  if (!res.ok) {
    throw new Error(
      `API request failed: ${res.status} ${res.statusText} — ${url}`,
    );
  }

  return res.json();
}

function unwrapArray(data: unknown): unknown[] {
  if (Array.isArray(data)) return data;

  if (
    data &&
    typeof data === "object" &&
    "articles" in data &&
    Array.isArray(data.articles)
  ) {
    return data.articles;
  }

  if (
    data &&
    typeof data === "object" &&
    "data" in data &&
    Array.isArray(data.data)
  ) {
    return data.data;
  }

  if (
    data &&
    typeof data === "object" &&
    "items" in data &&
    Array.isArray(data.items)
  ) {
    return data.items;
  }

  return []; 
}

function mapToArticle(data: any): Article {
  return {
    id: data.id ?? data.slug,
    slug: data.slug ?? data.id,
    title: data.title,
    excerpt: data.excerpt,
    body: data.content,
    category: data.category,
    author: data.author?.name,
    publishedAt: data.publishedAt,
    imageUrl: data.image,
    isTrending: data.featured,
  };
}

export async function getFeaturedArticles(): Promise<Article[]> {
  "use cache";

  const data = await fetchJson<unknown>("/articles?featured=true&limit=6");
  return unwrapArray(data).map(mapToArticle).slice(0, 6);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  "use cache";

  const data = await fetchJson<unknown>(`/articles/${slug}`);

  if (Array.isArray(data)) {
    const found = data.find((item: any) => item.slug === slug || item.id === slug);
    return found ? mapToArticle(found) : null;
  }

  if (data && typeof data === "object" && "article" in data) {
    return mapToArticle((data as any).article);
  }

  if (data && typeof data === "object" && "data" in data) {
    return mapToArticle((data as any).data);
  }

  return mapToArticle(data);
}

export async function getTrendingArticles(
  currentSlug?: string,
): Promise<Article[]> {
  "use cache";

  const data = await fetchJson<unknown>(`/articles/trending?exclude=${currentSlug}`);

  return unwrapArray(data)
    .map(mapToArticle)
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 4);
}

export async function getBreakingNews(): Promise<BreakingNews> {
  "use cache";

  const data = await fetchJson<any>("/breaking-news");

  const item = data?.breakingNews ?? data?.data ?? data;
  
  return {
    id: String(item.id ?? "breaking-news"),
    title: item.title ?? item.headline ?? "Breaking news",
    summary: item.summary ?? item.excerpt ?? "",
    publishedAt:
      item.publishedAt ?? item.createdAt ?? new Date().toISOString(),
  };
}

export async function getCategories(): Promise<string[]> {
  "use cache";

  const data = await fetchJson<unknown>("/categories");
  const articles = unwrapArray(data).map(mapToArticle);

  return Array.from(new Set(articles.map((article) => article.slug)));
}

export async function searchArticles({
  query,
  category,
  limit = 5,
}: {
  query?: string;
  category?: string;
  limit?: number;
}): Promise<Article[]> {
  "use cache";

  const params = new URLSearchParams();
  const validCategories = [
  "changelog",
  "engineering",
  "customers",
  "company-news",
  "community",
];

  if (category && validCategories.includes(category)) {
    params.set("category", category);
  }


  if (query && query.trim().length >= 3) {
    params.set("search", query);
  }

  params.set("limit", String(limit));

  if (!params.toString()) return [];

  const data = await fetchJson<unknown>(`/articles?${params.toString()}`);

  return unwrapArray(data).map(mapToArticle).slice(0, limit);
}