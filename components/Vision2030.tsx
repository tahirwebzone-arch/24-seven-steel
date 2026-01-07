"use client";
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Vision2030() {
  const t = useTranslations('Vision2030');

  return (
    <section className="py-12 lg:py-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-[#1a1b2e] rounded-2xl overflow-hidden p-8 md:p-10 lg:p-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Logo Section - Handled border flip for RTL */}
          <div className="md:col-span-4 flex flex-col items-center justify-center 
                          md:border-r rtl:md:border-r-0 rtl:md:border-l border-gray-500/50 
                          md:pr-10 rtl:md:pr-0 rtl:md:pl-10">
            <div className="relative w-full aspect-[4/3] max-w-[200px]">
              <Image 
                src="/vision-2030-logo.png" 
                alt="Saudi Vision 2030" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </div>

          {/* Typography Section */}
          <div className="md:col-span-8 space-y-8 text-center md:text-start md:pl-10 rtl:md:pl-0 rtl:md:pr-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.15] tracking-tight">
              {t.rich('title', {
                highlight: (chunks) => <span className="text-[#4ade80] font-bold">{chunks}</span>
              })}
            </h2>
            
            <Link href="/ksavision">
              <button className="bg-[#58e27d] hover:bg-[#48ce6b] text-[#ffffff] font-semibold py-2 px-6 text-lg rounded-xl transition-all duration-300 shadow-lg cursor-pointer">
                {t('button')}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}