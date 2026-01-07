"use client";
import Image from 'next/image';
import Hero from "@/components/Hero";
import { useTranslations, useLocale } from "next-intl";

export default function CertificatesPage() {
  const t = useTranslations('Certificates');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const trustFeatures = [
    { title: t('reliability'), icon: "/icons/reliability.png" },
    { title: t('authenticity'), icon: "/icons/authenticity.png" },
    { title: t('security'), icon: "/icons/security.png" },
    { title: t('confidence'), icon: "/icons/confidence.png" },
  ];

  return (
    <main className="bg-white pb-20">
      {/* Service Style Hero - Will show white box bottom-right for AR, bottom-left for EN */}
      <Hero title={t('heroTitle')} showForm={false} imageSrc="/hero-certificates.png" />

      {/* Trusted & Verified Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-start">{t('trustedTitle')}</h2>
        <p className="text-gray-700 text-lg max-w-5xl leading-relaxed mb-12 text-start">
          {t('trustedDesc')}
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustFeatures.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-16 h-16 relative mb-4 opacity-70">
                <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-800">{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-24">
        <h2 className="text-4xl font-bold text-red-600 text-start">{t('legalTitle')}</h2>

        {/* Commercial License */}
        <div className={`flex flex-col ${isAr ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
          <div className="flex-1 space-y-6 text-start w-full">
            <h3 className="text-3xl font-bold text-red-600">{t('commLicense')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('commDesc')}
            </p>
            <div className="space-y-3">
              <p className="font-bold">{t('details')}</p>
              <ul className={`space-y-2 text-gray-700 ${isAr ? 'mr-6' : 'ml-6'} list-disc`}>
                <li><span className="font-bold">{t('unifiedNo')}:</span> 7051000250</li>
                <li><span className="font-bold">{t('issueDate')}:</span> 31/07/2025</li>
                <li><span className="font-bold">{t('authority')}:</span> {t('saudiMoC')}</li>
                <li><span className="font-bold">{t('verification')}:</span> {t('qrCodeText')}</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[350px] aspect-square relative border border-gray-200 rounded-3xl p-10 flex items-center justify-center shadow-lg bg-white">
            <Image src="/icons/ministry-commerce.png" alt="Ministry of Commerce" width={250} height={250} className="object-contain" />
          </div>
        </div>

        {/* VAT Registration */}
        <div className={`flex flex-col ${isAr ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
          <div className="flex-1 space-y-6 text-start w-full">
            <h3 className="text-3xl font-bold text-red-600">{t('vatCertificate')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('vatDesc')}
            </p>
            <div className="space-y-3">
              <p className="font-bold">{t('details')}</p>
              <ul className={`space-y-2 text-gray-700 ${isAr ? 'mr-6' : 'ml-6'} list-disc`}>
                <li><span className="font-bold">{t('certNo')}:</span> 100251148238354</li>
                <li><span className="font-bold">{t('vatNo')}:</span> 314080331900003</li>
                <li><span className="font-bold">{t('authority')}:</span> {t('zakatAuthority')}</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-[350px] aspect-square relative border border-gray-200 rounded-3xl p-10 flex items-center justify-center shadow-lg bg-white">
            <Image src="/icons/zakat-authority.png" alt="Zakat Authority" width={250} height={250} className="object-contain" />
          </div>
        </div>
      </section>
    </main>
  );
}