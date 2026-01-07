"use client";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function MarketsWeServe() {
  const t = useTranslations('Markets');

  // Mapping the keys to the translations
  const cities = [
    t('cities.riyadh'),
    t('cities.jeddah'),
    t('cities.dammam'),
    t('cities.khobar'),
    t('cities.mecca'),
    t('cities.medina')
  ];

  return (
    <section className="bg-[#32343a] py-12 px-6 md:px-10 lg:px-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Content Column */}
        <div className="w-full md:w-1/2 space-y-8 text-start">
          <h2 className="text-5xl font-bold tracking-tight">
            {t('title')}
          </h2>

          {/* City Badges Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <div 
                key={city} 
                className="flex items-center gap-3 bg-white rounded-xl py-3 px-5 shadow-sm transition-transform hover:scale-105"
              >
                {/* Green Check Circle - shrink-0 prevents it from squashing in RTL */}
                <div className="bg-[#5ee469] rounded-full p-1 shrink-0">
                  <svg 
                    className="w-4 h-4 text-white stroke-[4]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1b1b1b] font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg pt-4">
            {t('description')}
          </p>
        </div>

        {/* Map Illustration Column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[1.2/1]">
            <Image
              src="/saudi-transparent-map.png"
              alt="Markets in KSA Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}