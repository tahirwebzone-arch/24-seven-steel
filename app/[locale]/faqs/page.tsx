"use client";
import Hero from "@/components/Hero";
import Link from "next/link"; 
import { useTranslations, useLocale } from "next-intl";

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();
  const isAr = locale === 'ar';

  // Extract the raw array of questions from JSON
  const faqData = t.raw('questions');

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Page Hero - Positioned based on language logic in Hero component */}
      <Hero 
        title={t('heroTitle')} 
        imageSrc="/hero-faqs.png" 
        showForm={false} 
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 text-start">
          <h2 className="text-4xl font-bold text-red-600 mb-4">{t('sectionTitle')}</h2>
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
            <span className="text-2xl">?</span>
            <h3>{t('subTitle')}</h3>
          </div>
        </div>

        {/* Quick Links / Summary */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-100">
          <ul className="space-y-4 text-start">
            {faqData.map((item: any, idx: number) => (
              <li key={idx}>
                <a 
                  href={`#faq-${idx}`} 
                  className="text-blue-600 hover:text-red-600 transition-colors font-medium border-b border-transparent hover:border-red-600"
                >
                  {item.q}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Detailed Answers */}
        <div className="space-y-16">
          {faqData.map((item: any, idx: number) => (
            <div key={idx} id={`faq-${idx}`} className="scroll-mt-24 text-start">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-gray-900">{idx + 1}-</span>
                <div className="space-y-4 w-full">
                  <h4 className="text-2xl font-bold text-gray-900">{item.q}</h4>
                  <p className={`text-gray-700 text-lg leading-relaxed ${isAr ? 'pr-1' : 'pl-1'}`}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#1a1c2e] text-white rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h3>
          <p className="text-gray-300 mb-8">{t('ctaDesc')}</p>
          
          <Link href="/contact">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded-xl transition-all cursor-pointer">
                {t('ctaButton')}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}