"use client";
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Hero from "@/components/Hero";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const n = useTranslations('Navbar');

  // Move the list inside the component so it stays reactive to locale changes
  const checkList = [
    t('check1'),
    t('check2'),
    t('check3'),
    t('check4')
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <Hero 
        title={n('about')} 
        imageSrc="/hero-about.png" 
        showForm={false} 
      />

      {/* 2. Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <Image 
              src="/about-office.png"
              alt="Our Office" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-red-600 border-l-4 rtl:border-l-0 rtl:border-r-4 border-red-600 pl-4 rtl:pl-0 rtl:pr-4">
              {t('storyTitle')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-start">
              {t('storyDescription')}
            </p>
            
            <ul className="space-y-4">
              {checkList.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold text-start">
                  <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Vision 2030 Section */}
      <section className="bg-[#1a1c2e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-start">
              {t('visionTitle')}
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-start">
              <p>{t('visionPara1')}</p>
              <p>{t('visionPara2')}</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image 
                src="/vision-pattern.png" 
                alt="Vision 2030" 
                fill 
                className="object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Countries Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">{t('globalTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { name: t('countryKSA'), code: "sa" },
              { name: t('countryUAE'), code: "ae" },
              { name: t('countryUSA'), code: "us" },
              { name: t('countrySpain'), code: "es" }
            ].map((loc) => (
              <div key={loc.code} className="flex flex-col items-center gap-4 group">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform group-hover:scale-110">
                  <Image 
                    src={`https://flagcdn.com/w160/${loc.code}.png`} 
                    alt={loc.name} 
                    fill 
                    className="object-cover"
                    unoptimized={true} // Helps if flagcdn has temporary loading issues
                  />
                </div>
                <span className="font-bold text-xl text-gray-800">{loc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}