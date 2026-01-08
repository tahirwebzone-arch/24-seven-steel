"use client";
import { useState } from "react"; // 1. Import useState
import Hero from "@/components/Hero";
import { Phone, Mail, MapPin, CheckCircle2, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { handleHeroForm } from "@/app/actions/formSubmit";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false); // 2. Add state
  const t = useTranslations('Contact');
  const locale = useLocale();
  const isAr = locale === 'ar';

  // Submission handler
  const clientAction = async (formData: FormData) => {
    await handleHeroForm(formData);
    setShowSuccess(true); // 3. Change alert to setShowSuccess(true)
  };

  const departments = isAr 
    ? ["ميكانيكي", "مبيعات", "استفسار عام", "شكوى"] 
    : ["Mechanical", "Sales", "General Inquiry", "Complaint"];

  return (
    <main className="bg-white min-h-screen">
      <Hero 
        title={t('heroTitle')} 
        imageSrc="/hero-contact.png" 
        showForm={false} 
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-red-600 pl-4 rtl:pl-0 rtl:pr-4 mb-8 text-start">
          <p className="text-gray-900 font-bold text-lg">{t('tagline')}</p>
        </div>
        
        <h2 className="text-4xl font-bold text-red-600 mb-12 text-start">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#333541] rounded-2xl p-8 md:p-10 shadow-2xl text-start">
            <h3 className="text-2xl font-bold text-white mb-2">{t('formTitle')}</h3>
            <p className="text-gray-400 mb-8">{t('formSubtitle')}</p>

            <form action={clientAction} className="space-y-6">
              <input type="hidden" name="formType" value="Contact Us Page" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('labelName')}</label>
                  <input 
                    name="name" 
                    type="text" 
                    required
                    placeholder={t('placeholderName')} 
                    className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('labelEmail')}</label>
                  <input 
                    name="contact" 
                    type="email" 
                    required
                    placeholder={t('placeholderEmail')} 
                    className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">
                   {isAr ? "القسم" : "Department"}
                </label>
                <div className="relative">
                  <select 
                    name="service" 
                    required
                    className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">{isAr ? "اختر القسم" : "Choose Department"}</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">{t('labelMessage')}</label>
                <textarea 
                  name="message" 
                  rows={5}
                  placeholder={t('placeholderMessage')} 
                  className="w-full p-3 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-red-600 resize-none"
                />
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg">
                {t('submitBtn')}
              </button>
            </form>
          </div>

          <div className="w-full h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.567!2d46.7!3d24.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM2JzAwLjAiTiA0Niw0MicwMC4wIkU!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* 4. Place Modal Here */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} isAr={isAr} />

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

// Sub-component for the Modal to keep the main code clean
function SuccessModal({ isOpen, onClose, isAr }: { isOpen: boolean; onClose: () => void; isAr: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={24} />
        </button>
        <div className="flex justify-center mb-4">
          <CheckCircle2 size={60} className="text-green-500 animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {isAr ? "شكراً لك!" : "Thank You!"}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-8">
          {isAr 
            ? "شكراً لاختياركم 24Seven Steel. فريقنا يراجع طلبكم الآن، وسنتواصل معكم قريباً." : "Thank you for choosing 24Seven Steel. Our team is reviewing your request, and will contact you shortly."}
        </p>
        <button
          onClick={onClose}
          className="w-full font-semibold py-3 rounded-xl transition-all active:scale-95 underline"
        >
          {isAr ? "حسناً" : "Great, thanks!"}
        </button>
      </div>
    </div>
  );
}