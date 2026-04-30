import { getSiteContent } from "@/lib/api/content";

export async function Footer() {
  const { footer } = await getSiteContent()
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
        ©{footer.copywriteDate} {footer.copywriteContent}
      </div>
    </footer>
  );
}