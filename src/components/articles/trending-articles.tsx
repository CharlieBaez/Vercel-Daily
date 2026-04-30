import { getTrendingArticles } from '@/lib/api/articles';
import { ArticleCard } from './article-card';

type TrendingArticlesProps = {
  currentSlug?: string;
  fallback?:string;
};

export async function TrendingArticles({ currentSlug, fallback }: TrendingArticlesProps) {
  const articles = await getTrendingArticles(currentSlug);

  if (articles.length === 0) {
    return (
      <p className='text-sm text-gray-500'>
        {fallback}
      </p>
    );
  }

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}