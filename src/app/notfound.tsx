import Link from "next/link";



export default function NotFound() {
  return (
    <>
    <h1 className="w-fit mx-auto text-5xl p-10">We&apos;re Sorry. This Page was not found.</h1>
    <Link href="/">Return Home</Link>
    </>
  );
}
