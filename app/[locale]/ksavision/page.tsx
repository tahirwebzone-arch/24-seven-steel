"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import FreeQuoteForm from "@/components/FreeQuoteForm";
import { useTranslations } from "next-intl";

export default function KSAVisionPage() {
  const t = useTranslations('Vision');

  // Images mapping (remains constant across languages)
  const images = [
    "/vision/mega-projects.png",
    "/vision/manufacturing.png",
    "/vision/tech.png",
    "/vision/delivery.png",
    "/vision/sustainable.png",
    "/vision/workforce.png"
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero 
        title={t('heroTitle')} 
        imageSrc="/hero-vision.png" 
        showForm={false} 
      />

      {/* Intro Text Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          {t('roleTitle')}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t('roleDesc')}
        </p>
      </section>

      {/* Dark Commitment Section */}
      <section className="bg-[#1a1c2e] py-12 lg:py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-start">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('commitmentTitle')} <br/> 
              <span className="text-white">{t('commitmentHighlight')}</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg max-w-2xl">
              <p>{t('commitmentPara1')}</p>
              <p>{t('commitmentPara2')}</p>
            </div>
          </div>
          
          {/* Vision 2030 Pattern */}
          <div className="flex-1 flex justify-center relative">
             <div className="w-50 h-50 md:w-[450px] md:h-[350px] relative">
                <Image 
                  src="/vision-pattern.png" 
                  alt="Vision 2030 Pattern" 
                  fill 
                  className="object-contain"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Contribution Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 mb-16 text-start">
          {t('gridTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('items').map((item: any, idx: number) => (
            <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group text-start">
              <div className="relative h-64 w-full">
                <Image 
                  src={images[idx]} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wide Form Section */}
      <section className="bg-[#1a1b2e] py-1 px-6">        
          <FreeQuoteForm layout="horizontal" />        
      </section>
    </main>
  );
}