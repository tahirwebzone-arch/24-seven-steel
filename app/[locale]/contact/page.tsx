"use client";
import Hero from "@/components/Hero";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section - Dynamic Title */}
      <Hero 
        title={t('heroTitle')} 
        imageSrc="/hero-contact.png" 
        showForm={false} 
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* 2. Top Tagline - Adjusted border for RTL */}
        <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-red-600 pl-4 rtl:pl-0 rtl:pr-4 mb-8 text-start">
          <p className="text-gray-900 font-bold text-lg">
            {t('tagline')}
          </p>
        </div>
        
        <h2 className="text-4xl font-bold text-red-600 mb-12 text-start">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 3. Dark Form Container */}
          <div className="bg-[#333541] rounded-2xl p-8 md:p-10 shadow-2xl text-start">
            <h3 className="text-2xl font-bold text-white mb-2">{t('formTitle')}</h3>
            <p className="text-gray-400 mb-8">{t('formSubtitle')}</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('labelName')}</label>
                  <input 
                    type="text" 
                    placeholder={t('placeholderName')} 
                    className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('labelEmail')}</label>
                  <input 
                    type="email" 
                    placeholder={t('placeholderEmail')} 
                    className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">{t('labelService')}</label>
                <div className="relative">
                  <select className="w-full p-3 rounded-lg bg-white text-gray-500 outline-none focus:ring-2 focus:ring-red-600 appearance-none">
                    <option>{t('chooseService')}</option>
                    {t.raw('services').map((service: string) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                  {/* Custom arrow logic for select if needed, but standard appearance-none hides it */}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">{t('labelMessage')}</label>
                <textarea 
                  rows={5}
                  placeholder={t('placeholderMessage')} 
                  className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600 resize-none"
                />
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg">
                {t('submitBtn')}
              </button>
            </form>
          </div>

          {/* 4. Map Section */}
          <div className="w-full h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115911.68239049757!2d46.63914847683416!3d24.725515250499696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x88a968436449175d!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 5. Direct Connect Info */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Phone className="text-red-600 w-8 h-8" />
            <span className="font-bold" dir="ltr">+966 55 879 4336</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Mail className="text-red-600 w-8 h-8" />
            <span className="font-bold">info@247steel-ksa.com</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="text-red-600 w-8 h-8" />
            <span className="font-bold text-sm">{t('address')}</span>
          </div>
        </div>
      </section>
    </main>
  );
}