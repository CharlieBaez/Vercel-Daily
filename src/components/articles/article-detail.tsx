import type { Article } from "@/lib/api/types";
import { formatDate } from "@/lib/utils/formatting";
import { FormattedText } from "../ui/formatted-text";
import Image from "next/image";

type ArticleDetailProps = {
  article: Article;
};

export const ArticleDetail = ({ article }: ArticleDetailProps) => {
  return (
    <article>
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {article.category}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          {article.title}
        </h1>

        <div className="mt-6 text-sm text-gray-500 mb-6">
          <span>{article.author.name}</span>
          <span className="mx-2">·</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
      </header>

      <div className="aspect-4/3 mx-auto max-w-prose bg-gray-200 rounded-2xl overflow-hidden">
        <Image src={article.imageUrl} className="w-full h-full object-cover" width={400} height={300} alt={`image-${article.title}`} />
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        {article.body.map((t, index) => {
          return <FormattedText key={index} content={t} />
        })}
      </div>
    </article>
  );
}