"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';

export default function WhatsAppWidget() {
  const locale = useLocale();
  const t = useTranslations('WhatsApp');
  const isAr = locale === 'ar';

  const phoneNumber = "+966558794336"; 
  const message = t('message');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Position: right-6 for EN, left-6 for AR
      className={`fixed bottom-6 ${isAr ? 'left-6' : 'right-6'} z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] active:scale-95 group`}
    >
      {/* Pulse effect to draw attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-50"></span>

      {/* The WhatsApp Icon */}
      <FaWhatsapp 
        size={35} 
        className="relative z-10" 
      />

      {/* Hover Tooltip - Position flips based on language */}
      <span className={`absolute ${isAr ? 'left-16' : 'right-16'} bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100`}>
        {t('tooltip')}
      </span>
    </a>
  );
}