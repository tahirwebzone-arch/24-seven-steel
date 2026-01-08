"use client";
import { useState } from "react"; // 1. Added useState
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { handleHeroForm } from "@/app/actions/formSubmit";
import { CheckCircle2, X } from "lucide-react";

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
  const [showSuccess, setShowSuccess] = useState(false); // 2. Success state
  const t = useTranslations("Hero");
  const s = useTranslations("ServicesItems");
  const locale = useLocale();
  const isAr = locale === 'ar';

  const displayTitle = title || t("title");
  const isVisionStyle = (title === "Supporting Vision 2030" || title === "دعم رؤية 2030") && !showForm;
  const isCenteredStyle = title === "Projects Showcase" || title === "Our Portfolio" || title === "Contact Us" || title === "About Us" || title === "عرض المشاريع" || title === "مشاريعنا" || title === "اتصل بنا" || title === "من نحن";

  return (
    <>
      <section className="relative h-[550px] w-full flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
          style={{ backgroundImage: `url('${imageSrc}')` }} 
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
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
            (showForm || isCenteredStyle) ? (
              <div className="text-center w-full">
                <h1 className="text-5xl md:text-7xl text-center max-w-4xl mx-auto font-bold mb-8 text-white" 
                    dangerouslySetInnerHTML={{ __html: displayTitle }}>
                </h1>

                {showForm && (
                  <form 
                    action={async (formData) => {
                      await handleHeroForm(formData);
                      setShowSuccess(true); // 3. Replaced alert with state
                    }}
                    className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-end gap-4 max-w-4xl mx-auto"
                  >
                    <input type="hidden" name="formType" value="Lead Form - Hero" />

                    <div className="w-full text-start">
                      <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_name")}</label>
                      <input 
                        name="name" 
                        type="text" 
                        required
                        placeholder={t("form_name_placeholder")} 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600" 
                      />
                    </div>
                    <div className="w-full text-start">
                      <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_service")}</label>
                      <select 
                        name="service" 
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600"
                      >
                        <option value="">{t("form_service_choose")}</option>
                        <option value="Metal Laser Cutting">{s("laser")}</option>
                        <option value="Steel Fabrication">{s("fabrication")}</option>
                        <option value="Metal Bending">{s("bending")}</option>
                        <option value="Event Production">{s("event")}</option>
                        <option value="Woodery">{s("wood")}</option>               
                      </select>
                    </div>
                    <div className="w-full text-start">
                      <label className="text-[#1b1b1b] text-sm font-bold block mb-1 ps-2">{t("form_contact")}</label>
                      <input 
                        name="contact" 
                        type="text" 
                        required
                        placeholder={t("form_contact_placeholder")} 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-red-600" 
                      />
                    </div>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-8 rounded-lg whitespace-nowrap transition-all shrink-0 cursor-pointer">
                      {t("button")}
                    </button>
                  </form>
                )}
              </div>
            ) : (
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

      {/* 4. Show Modal when success is true */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} isAr={isAr} />
    </>
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