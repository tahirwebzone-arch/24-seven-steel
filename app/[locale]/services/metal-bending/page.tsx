"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FreeQuoteForm from "@/components/FreeQuoteForm";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Partners from "@/components/Partners";
import { useTranslations } from "next-intl";

export default function MetalBnding() {
  const t = useTranslations('MetalBending');
  const allImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main>
      {/* Title remains English as requested */}
      <Hero 
        title={t('heroTitle')}
        imageSrc="/hero-metal-bending.png"
        showForm={false}
      />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Content Area - use text-start for automatic LTR/RTL alignment */}
          <div className="lg:col-span-2 space-y-8 text-start">
            <h2 className="text-2xl font-bold border-l-4 rtl:border-l-0 rtl:border-r-4 border-red-600 pl-4 rtl:pl-0 rtl:pr-4">
              {t('sectionTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('desc1')}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('desc2')}
            </p>
            
            {/* Technical Capabilities Grid */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold mb-4">{t('techTitle')}</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {t.raw('techItems').map((item: string) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="text-red-600 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <FreeQuoteForm serviceSlug="Metal Bending" />
          </div>
        </div>
      </section>

      {/* Innovation Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-600 mb-10 text-start">
            {t('portfolioTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {allImages.slice(0, visibleCount).map((i) => (
              <div key={i} className="group relative aspect-video overflow-hidden rounded-xl bg-gray-100">
                <Image 
                  src={`/portfolio/metal-bending-${i}.png`} 
                  alt={`Metal Bending ${i}`} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>

          {/* Buttons Area */}
          <div className="flex justify-center items-center gap-4 mt-12">
            {visibleCount < allImages.length && (
                <button 
                  onClick={handleLoadMore}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors cursor-pointer"
                >
                  {t('loadMore')}
                </button>
            )}

            {visibleCount > 6 && (
                <button 
                  onClick={() => setVisibleCount(6)}
                  className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors cursor-pointer border border-gray-300"
                >
                  {t('showLess')}
                </button>
            )}
          </div>
        </div>
      </section>

      <div>
        <Reviews />
        <Partners />
      </div>
    </main>
  );
}