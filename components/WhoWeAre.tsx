"use client";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function WhoWeAre() {
  const t = useTranslations('WhoWeAre');

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content - Taking 8 columns */}
        <div className="md:col-span-8 space-y-6">
          <div className="flex items-center gap-4">
            {/* Red accent bar: shrink-0 is important so it doesn't squash in RTL */}
            <div className="w-1 h-14 bg-red-600 rounded-full mt-1 shrink-0"></div>
            <p className="text-gray-900 font-bold text-lg leading-snug text-start">
              {t('badge')}
            </p>
          </div>
          
          <h2 className="text-5xl font-bold text-red-600 tracking-tight text-start">
            {t('title')}
          </h2>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed text-start">
            <p>
              {/* Correct way to handle rich text: Use the 'chunks' parameter */}
              {t.rich('para1', {
                interior: (chunks) => (
                  <span className="font-semibold text-red-600">
                    {chunks} {/* This renders the actual words inside the JSON interior key */}
                  </span>
                ),
              })}
            </p>

            <p>
              {t.rich('para2', {
                brand: (chunks) => (
                  <span className="font-bold">
                    {chunks} {/* This renders "24 Seven Group" or "مجموعة 24 سفن" */}
                  </span>
                ),
              })}
            </p>
          </div>
        </div>

        {/* Right Side: Image - Taking 4 columns */}
        <div className="md:col-span-4 relative h-[350px] md:h-[400px] w-full rounded-3xl overflow-hidden">
          <Image
            src="/who-we-are.png"
            alt="Steel fabrication at 24 Seven Group"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}