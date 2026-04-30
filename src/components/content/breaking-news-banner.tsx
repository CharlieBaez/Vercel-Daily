import { getBreakingNews } from "@/lib/api/articles";
import { formatDate } from "@/lib/utils/formatting";
import { getSiteContent } from "@/lib/api/content";
// import Link from "next/link";

export type BannerProps = {
  eyebrow?:string;
  title?:string;
  description?:string;
  date?: string;
}
export const BreakingNewsBanner = async () => {
  const { banner } = await getSiteContent()
  const item = await getBreakingNews();
  return (
    <aside className="rounded-2xl border shadow-lg border-gray-200 bg-white p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[tomato]">
            {banner.eyebrow}
          </p>
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{item.summary}</p>
        </div>

        <time className="text-sm text-gray-500">
          {formatDate(item.publishedAt)}
        </time>
      </div>
    </aside>
  )
}