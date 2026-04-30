export type BannerProps = {
  eyebrow?:string;
  title?:string;
  description?:string;
  date?: string;
}
export const Banner = ({ eyebrow,
  title,
  description,
  date}: BannerProps) => {
  return (
    <aside className="rounded-2xl border shadow-lg border-gray-200 bg-white p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[tomato]">
            {eyebrow}
          </p>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>

        <time className="text-sm text-gray-500">
          {date}
        </time>
      </div>
    </aside>
  )
}
