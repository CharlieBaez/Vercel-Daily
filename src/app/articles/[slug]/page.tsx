import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleDetail } from "@/components/articles/article-detail";
import { PaywallPreview } from "@/components/articles/paywall-preview";
import { TrendingArticles } from "@/components/articles/trending-articles";
import { getArticleBySlug } from "@/lib/api/articles";
import { getSubscriptionStatus } from "@/lib/utils/subscription-status";
import Spinner from "@/components/ui/spinner";
import { getSiteContent } from "@/lib/api/content";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      images: [article.imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articlePage } = await getSiteContent()
  const { preview, trending } = articlePage;
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  const isSubscribed = await getSubscriptionStatus();
  

  if (!article) {
    notFound();
  }


  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Suspense fallback={<div className="h-full min-h-[50vh] w-full flex flex-col justify-center items-center"><Spinner trackColor='black' strokeColor='black' size='xl' /></div>}>
      {isSubscribed ? (
        <ArticleDetail article={article} />
      ) : (
        <PaywallPreview preview={preview} article={article} />
      )}
      </Suspense>

      <section className="mt-16 border-t border-gray-200 pt-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {trending.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
             {trending.title}
          </h2>
        </div>
        <Suspense fallback={<Spinner trackColor='black' strokeColor='black' size='md' />}>
          <TrendingArticles fallback={trending.noResults} currentSlug={article.slug} />
        </Suspense>
      </section>
    </div>
  );
}