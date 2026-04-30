"use client";

type ArticleErrorProps = {
  error: Error;
  reset: () => void;
};

export default function ArticleError({ error, reset }: ArticleErrorProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-[tomato]">
        Something went wrong
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">
        We could not load this article.
      </h1>

      <p className="mt-4 text-gray-600">{error.message}</p>

      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-(--dark) px-5 py-3 text-sm font-semibold text-(--light)"
      >
        Try again
      </button>
    </div>
  );
}