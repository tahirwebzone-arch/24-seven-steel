"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function Reviews() {
  const t = useTranslations('Reviews');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [init, setInit] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <section className="bg-[#2D3139] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4 text-start">
            <div className="flex items-center gap-3">
              {/* Red line flips side in RTL */}
              <div className="w-1 h-12 bg-red-600 shrink-0" />
              <p className="text-white text-lg max-w-xl">
                {t('subTitle')}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('mainTitle')}
            </h2>
          </div>

          {/* Navigation Buttons - Order flips automatically with flex-row */}
          <div className="flex gap-4">
            <button 
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer z-10 disabled:opacity-50"
            >
              {isRtl ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer z-10 disabled:opacity-50"
            >
              {isRtl ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          dir={isRtl ? 'rtl' : 'ltr'}
          key={locale} // Re-mount swiper on locale change
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
            768: { slidesPerView: 2 }, 
          }}
          className="reviews-swiper"
        >
          {t.raw('items').map((review: any, index: number) => (
            <SwiperSlide key={index} className="pb-4">
              <div className="bg-white rounded-[2rem] p-8 shadow-xl h-full min-h-[350px] text-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-200">
                    <Image
                      src={`/user-${index + 1}.png`} // Dynamically choosing image based on index
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">
                      {review.name} – {review.location}
                    </h4>
                    {/* Fixed date for demo, you can add date to JSON if needed */}
                    <p className="text-gray-400 text-sm">2025</p> 
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>

                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {review.title}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}