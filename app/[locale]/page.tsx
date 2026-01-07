// app/[locale]/page.tsx
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Vision2030 from '@/components/Vision2030';
import ReliableServices from '@/components/ReliableServices';
import MarketsWeServe from '@/components/MarketsWeServe';
import Partners from '@/components/Partners';

// Use getTranslations for Server Components
import { getTranslations } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  // 1. Await the params to resolve the locale (Next.js 15 requirement)
  const { locale } = await params;

  // 2. Fetch translations on the server if you need them here
  // const t = await getTranslations('Hero');

  return (
    <main className="min-h-screen bg-white">      
      {/* Note: Since your components (Hero, etc.) likely use 'useTranslations' 
          inside them with "use client", they will automatically pick up the 
          correct locale from the context. 
      */}
      <Hero />
      <WhoWeAre />
      <Vision2030 />
      <ReliableServices />
      <MarketsWeServe />
      <Partners />      
    </main>
  );
}