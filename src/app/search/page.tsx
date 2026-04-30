import type { Metadata } from "next";
import { SearchForm } from "@/components/search/search-form";
import { SearchResults } from "@/components/search/search-results";
import { getCategories, searchArticles } from "@/lib/api/articles";
import { Article } from "@/lib/api/types";
import { getSiteContent } from "@/lib/api/content";
import { FeaturedArticlesGrid } from "@/components/articles/featured-articles-grid";

export const metadata: Metadata = {
  title: "Search",
  description: "Search reporting and analysis from Vercel Daily.",
  openGraph: {
    title: "Search | Vercel Daily",
    description: "Search reporting and analysis from Vercel Daily.",
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { search, articleList } = await getSiteContent()

  const params = await searchParams;

  const query = params.q ?? "";
  const category = params.category ?? "";

  const hasActiveSearch = query.trim().length >= 3 || category.length > 0;
  
  const [categories, articles] = await Promise.all([
    getCategories(),
    hasActiveSearch
      ? searchArticles({ query, category, limit: 5 })
      : Promise.resolve([]),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {search.searchPage.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {search.searchPage.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {search.searchPage.description}
        </p>
      </header>

      <SearchForm
        formFields={search.searchForm}
        categories={categories}
        defaultQuery={query}
        defaultCategory={category}
      />

      <div className="mt-10">
       {params.q  ? (
          <SearchResults noResults={search.searchNoResults} articles={articles as unknown as Article[]} hasActiveSearch={hasActiveSearch} />
        ) : (
          <section className='mx-auto max-w-6xl px-4 py-10'>
            <div className='mb-6'>
              <p className='text-sm font-semibold uppercase tracking-wide text-gray-500'>
                {articleList.eyebrow}
              </p>
              <h2 className='text-3xl font-bold tracking-tight'>
                {articleList.title}
              </h2>
            </div>
              <FeaturedArticlesGrid />
          </section>
        )}
      </div>
    </div>
  );
}