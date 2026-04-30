import Link from 'next/link';
import { SubscriptionToggle } from '../content/subscription-toggle';
import Image from 'next/image';
import { getSiteContent } from '@/lib/api/content';
import { Suspense } from 'react';

export async function Header() {
  const { header } = await getSiteContent()
  const { logo, navigation } = header

  return (
    <header className='border-b border-gray-200 bg-white'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        <Link href={logo.link.href} className='text-xl text-(--dark) font-bold tracking-tight gap-3 flex items-center'>
          <Image className='brightness-0' alt={logo.img.alt} width={logo.img.width} height={logo.img.height} src={logo.img.src} />
          {logo.link.text}
        </Link>

        <nav className='flex items-center gap-4 text-sm font-medium'>
          {navigation.map((l) => (
            <Link key={l.id} href={l.href} className='text-gray-700 hover:text-black'>
              {l.text}
            </Link>
          ))}
          <Suspense>
            <SubscriptionToggle />
          </Suspense>
        </nav>
      </div>
    </header>
  );
}