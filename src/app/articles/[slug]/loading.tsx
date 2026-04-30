import Spinner from "@/components/ui/spinner";

export default function ArticleLoading () {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-10">
        <Spinner trackColor='black' strokeColor='black' size='xl' />
    </div>
  );
}