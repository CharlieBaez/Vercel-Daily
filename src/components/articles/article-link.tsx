'use client';

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../ui/spinner";

export function ArticleCardLink({ href, children }: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          router.push(href);
        });
      }}
      className="after:absolute after:h-full after:w-full after:inset-0 cursor-pointer"
    >
      {children}

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-(--light)/70">
          <Spinner trackColor="black" strokeColor="black" size="xl" />
        </div>
      )}
    </button>
  );
}