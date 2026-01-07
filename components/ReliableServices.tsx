"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ReliableServices() {
  const t = useTranslations('ReliableServices');
  const s = useTranslations('ServicesItems');

  const services = [
    { title: s('laser'), desc: t('laserDesc'), img: "/metal-laser-cutting.png", reverse: false },
    { title: s('fabrication'), desc: t('fabricationDesc'), img: "/steel-fabrication.png", reverse: true },
    { title: s('bending'), desc: t('bendingDesc'), img: "/metal-bending.png", reverse: false },
    { title: s('event'), desc: t('eventDesc'), img: "/event-production.png", reverse: true },
    { title: s('wood'), desc: t('woodDesc'), img: "/woodery.png", reverse: false },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            {/* In Arabic, the red bar will naturally stay on the right if you use 'rtl' logic */}
            <div className="w-1 h-10 bg-red-600 rounded-full shrink-0"></div>
            <p className="text-gray-900 font-bold text-lg leading-tight text-start">
              {t('badge')}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 tracking-tight text-start">
            {t('mainTitle')}
          </h2>
        </div>

        {/* Services Loop */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* Image Container */}
              <div className={`overflow-hidden rounded-2xl md:max-w-lg order-1 ${service.reverse ? 'md:order-2' : 'md:order-1'}`}>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover shadow-lg transition-transform hover:scale-105 duration-500"
                  priority={index === 0}
                />
              </div>

              {/* Content Container */}
              <div className={`order-2 ${service.reverse ? 'md:order-1' : 'md:order-2'} text-start`}>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-xl text-gray-600 leading-relaxed text-start">
                  {service.desc}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
                >
                  {t('viewMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}