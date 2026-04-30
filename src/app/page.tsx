import type { Metadata } from 'next';
import { Suspense } from 'react';
import { FeaturedArticlesGrid } from '@/components/articles/featured-articles-grid';
import { BreakingNewsBanner } from '@/components/content/breaking-news-banner';
import { Hero } from '@/components/content/hero';
import Spinner from '@/components/ui/spinner';
import { getSiteContent } from '@/lib/api/content';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Latest stories, analysis, and engineering insight from Vercel Daily.',
  openGraph: {
    title: 'Vercel Daily',
    description:
      'Latest stories, analysis, and engineering insight from Vercel Daily.',
  },
};

export default async function  HomePage() {
  const { hero, articleList } = await getSiteContent()
  return (
    <div>
      <Suspense fallback={<div className="h-full min-h-[50vh] w-full flex flex-col justify-center items-center"><Spinner trackColor='black' strokeColor='black' size='xl' /></div>}>
        <>
          <Hero img={hero.img} eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />
          <section className='mx-auto max-w-6xl px-4 py-6'>
              <BreakingNewsBanner />
          </section>

          <section className='mx-auto max-w-6xl px-4 py-10'>
            <div className='mb-6'>
              <p className='text-sm font-semibold uppercase tracking-wide text-gray-500'>
                {articleList.eyebrow}
              </p>
              <h2 className='text-3xl font-bold tracking-tight'>
                {articleList.title}
              </h2>
            </div>
              <FeaturedArticlesGrid />
          </section>
        </>
      </Suspense>
    </div>
  );
}