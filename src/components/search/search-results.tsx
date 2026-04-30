import type { Article } from "@/lib/api/types";
import { ArticleCard } from "@/components/articles/article-card";

type SearchResultsProps = {
  articles: Article[];
  noResults:{
    resultsLabel:string;
    noResultsText:string;
  },
  hasActiveSearch: boolean;
};

export const SearchResults = ({ articles, hasActiveSearch, noResults }: SearchResultsProps) => {
  if (articles?.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-gray-300 p-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">{noResults.resultsLabel}</h2>
        <p className="mt-3 text-gray-600">
         {noResults.noResultsText}
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {hasActiveSearch ? "Search results" : "Recent articles"}
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          {hasActiveSearch
            ? `${articles?.length} article${articles?.length === 1 ? "" : "s"} found`
            : "Start with the latest stories"}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article) => (
          <ArticleCard key={article?.id} article={article} />
        ))}
      </div>
    </section>
  );
}