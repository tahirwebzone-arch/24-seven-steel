"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  showForm?: boolean;
}

export default function Hero({ 
  title, 
  subtitle,
  imageSrc = "/hero.jpg",
  showForm = true 
}: HeroProps) {
  const t = useTranslations("Hero");
  const s = useTranslations("ServicesItems");
  const locale = useLocale();
  const isAr = locale === 'ar';

  // 1. DYNAMIC LOGIC: Decide what to display
  const displayTitle = title || t("title");
  
  const isVisionStyle = (title === "Supporting Vision 2030" || title === "دعم رؤية 2030") && !showForm;
  
  // Logic for main pages that should always be centered
  const isCenteredStyle = title === "Projects Showcase" || title === "Our Portfolio" || title === "Contact Us" || title === "About Us" || title === "عرض المشاريع" || title === "مشاريعنا" || title === "اتصل بنا" || title === "من نحن";

  return (
    <section className="relative h-[550px] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
        style={{ backgroundImage: `url('${imageSrc}')` }} 
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* 1. VISION 2030 STYLE */}
        {isVisionStyle ? (
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Image 
                src="/vision-2030-logo-white.png"
                alt="Vision 2030 Logo" 
                width={180}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            <div className="bg-white px-6 py-2 md:px-10 md:py-3 rounded-2xl shadow-lg mb-4">
              <span className="text-[#1b1b1b] text-xl md:text-4xl font-bold">
                {t("vision_support")}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                {t("steel_innovation")}
            </h1>
          </div>
        ) : (
          /* 2. CENTERED STYLE (Main Pages and Home Form) */
          (showForm || isCenteredStyle) ? (
            <div className="text-center w-full">
              <h1 className="text-5xl md:text-7xl text-center max-w-4xl mx-auto font-bold mb-8 text-white" 
                  dangerouslySetInnerHTML={{ __html: displayTitle }}>
              </h1>

              {showForm && (
                <div className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-end gap-4 max-w-4xl mx-auto">
                  <div className="w-full text-start">
                    <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_name")}</label>
                    <input type="text" placeholder={t("form_name_placeholder")} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600" />
                  </div>
                  <div className="w-full text-start">
                    <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_service")}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600">
                      <option>{t("form_service_choose")}</option>
                      <option>{s("laser")}</option>
                      <option>{s("fabrication")}</option>
                      <option>{s("bending")}</option>
                      <option>{s("event")}</option>
                      <option>{s("wood")}</option>               
                    </select>
                  </div>
                  <div className="w-full text-start">
                    <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_contact")}</label>
                    <input type="text" placeholder={t("form_contact_placeholder")} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600" />
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-8 rounded-lg whitespace-nowrap transition-all shrink-0 cursor-pointer">
                    {t("button")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* 3. SERVICE SUB-PAGE STYLE (Dynamic alignment based on locale) */
            <div className={`absolute bottom-0 ${isAr ? 'right-6' : 'left-6'} mb-[-1px]`}>
              <div className="bg-white px-7 py-3 rounded-t-3xl shadow-xl inline-block">
                <h1 className="text-red-600 text-3xl md:text-4xl font-bold tracking-tight text-start">
                  {displayTitle}
                </h1>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}