"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl'; // Added useLocale
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const partnerLogos = [
  { name: "Al Habtoor", logo: "/partners/alhabtoor.png" },
  { name: "COP 28", logo: "/partners/cop-28-UAE.png" },
  { name: "Dubai Holding", logo: "/partners/dubai-holding.png" },
  { name: "Expo City", logo: "/partners/expo-city-dubai.png" },
  { name: "Holovis", logo: "/partners/holovis.png" },
  { name: "Identity", logo: "/partners/identity.png" },
  { name: "Jumeirah", logo: "/partners/jumeirah-mina-al-salam.png" },
  { name: "Karla Rivera", logo: "/partners/karla-rivera.png" },
  { name: "La Perle", logo: "/partners/la-perle.png" },
  { name: "People Co", logo: "/partners/people-co.png" },
  { name: "Tait", logo: "/partners/tait.png" },
];

export default function Partners() {
  const t = useTranslations('Partners');
  const locale = useLocale(); // Detects 'en' or 'ar'
  const isRtl = locale === 'ar';

  const [init, setInit] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Re-render once to attach refs to Swiper
  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section matching reference image_9a5bdf.png */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="">
          <div className="flex items-center gap-4 mb-4">
            {/* Red accent bar from reference */}
            <div className="w-1 h-10 bg-red-600 rounded-full shrink-0"></div>
            <p className="text-gray-900 font-bold text-lg leading-tight"
              dangerouslySetInnerHTML={{ __html: t('badge') }} >
            </p>
          </div>
          <h2 className="text-5xl font-bold text-red-600 tracking-tight">
            {t('title')}
          </h2>
        </div>

        {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer z-10 disabled:opacity-30"
            >
             {/* If Arabic, 'Previous' should be the Right arrow */}
              {isRtl ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer z-10 disabled:opacity-30"
            >
              {/* If Arabic, 'Next' should be the Left arrow */}
                {isRtl ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
            </button>
          </div>
          </div>

        {/* Swiper Carousel */}
        <div className="py-lg-10 pt-0">
          <Swiper
            dir={isRtl ? 'rtl' : 'ltr'} // Crucial for Swiper RTL support
            key={locale} // Forces re-init when language changes
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }
                    }}
                    breakpoints={{
                      768: { slidesPerView: 5 }, 
                    }}
            className="partner-swiper"
          >
            {partnerLogos.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300}
                    height={225}
                    className="object-contain max-h-225 bg-white border border-gray-300 rounded-2xl"
                    // If images are missing, verify paths exist in /public/partners/
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}