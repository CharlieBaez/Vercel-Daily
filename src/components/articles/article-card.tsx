import Link from "next/link";
import type { Article } from "@/lib/api/types";
import { formatDate } from "@/lib/utils/formatting";
import Image from "next/image";
import { ArticleCardLink } from "./article-link";

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="transition-all overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm relative hover:scale-105 hover:shadow-xl">
      <div className="aspect-4/3 bg-gray-200">
        <Image src={article.imageUrl} className="w-full h-full object-cover" width={400} height={300} alt={`image-${article.title}`} />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          <span>{article.category}</span>
          <span>·</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
        <h3 className="text-xl font-bold leading-tight">
        <ArticleCardLink href={`/articles/${article.slug}`}>
          {article.title}
        </ArticleCardLink>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}