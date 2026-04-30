import type {
  Article, 
  // SiteContent 
} from "@/lib/api/types";
import { formatDate } from "@/lib/utils/formatting";
import { SubscriptionToggle } from "../content/subscription-toggle";
import Image from "next/image";
import { FormattedText } from "../ui/formatted-text";

type PaywallPreviewProps = {
  article: Article;
  preview: {eyebrow: string; title: string; description: string}
};

export const PaywallPreview = ({ preview, article }: PaywallPreviewProps) => {

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
        <div className="text-lg leading-8 text-gray-700 relative after:absolute after:w-full after:h-full after:inset-0 after:bg-linear-to-t after:from-(--light) after:from-0% after:to-transparent after:to-80%">{article.body.map((i, index) => <FormattedText key={index} content={i} />).slice(0,2)}</div>
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {preview.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            {preview.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600 mb-6">
            {preview.description}
          </p>
          <SubscriptionToggle />
        </div>
      </div>
    </article>
  );
}
