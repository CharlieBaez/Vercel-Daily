import { getFeaturedArticles } from "@/lib/api/articles";
import { ArticleCard } from "./article-card";

export const FeaturedArticlesGrid = async () => {
  const articles = await getFeaturedArticles();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}