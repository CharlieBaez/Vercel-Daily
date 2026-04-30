import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vercel Daily",
    template: "%s | Vercel Daily",
  },
  description:
    "A fictional news publication built with Next.js 16 and deployed on Vercel.",
  generator: "vnews-cert-v3",
  openGraph: {
    title: "Vercel Daily",
    description:
      "A fictional news publication built with Next.js 16 and deployed on Vercel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Suspense>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
