"use client";
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');
  const n = useTranslations('Navbar'); // Reuse Navbar keys for Home, About, Contact

  return (
    <footer className="bg-[#f7f7f7] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: About 24 Seven */}
          <div className="space-y-6 text-start">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 inline-block pb-1">
              {t('aboutTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link href="/" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{n('home')}</Link>
              <Link href="/ksavision" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{n('vision')}</Link>
              <Link href="/about" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{n('about')}</Link>
              <Link href="/contact" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{n('contact')}</Link>
            </div>
            
            <div className="pt-10">
              <div className="flex flex-wrap gap-4 items-center">
                {[
                  { id: 'saudi-arabia', key: 'ksa' },
                  { id: 'uae', key: 'uae' },
                  { id: 'usa', key: 'usa' },
                  { id: 'spain', key: 'spain' }
                ].map((country) => (
                  <div key={country.id} className="flex items-center gap-2">
                    {/* This now pulls from the "countries" object we just added to ar.json */}
                    <span className="text-sm font-bold text-gray-900 uppercase">
                      {t(`countries.${country.key}`)}
                    </span>
                    <Image 
                        src={`/flag-${country.id}.png`} 
                        alt={country.id} 
                        width={30} 
                        height={30} 
                        className="rounded-full shadow-sm" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Trusted Links */}
          <div className="space-y-6 text-start">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 inline-block pb-1">
              {t('linksTitle')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/license" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{t('license')}</Link></li>
              <li><Link href="/faqs" className="text-blue-500 hover:text-red-600 transition-colors font-semibold">{t('faqs')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-6 text-start">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-gray-200 inline-block pb-1">
              {t('connectTitle')}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-blue-500 mt-1 shrink-0 rtl:scale-x-[-1]" />
                <span className="text-blue-500 font-medium dir-ltr inline-block">+96 653 6091 047</span>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-blue-500 mt-1 shrink-0" />
                <span className="text-blue-500 font-medium">info@247steel-ksa.com</span>
              </li>
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
                <span className="text-blue-500 font-medium leading-relaxed">
                  {t('address')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-3 border-white flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-900 font-medium text-sm text-center md:text-start">
            {t('copyright')} <Link href="#" className="font-bold underline">{t('developer')}</Link>
          </p>
          <div className="flex gap-4">
            {/* Social icons usually don't need translation, but we ensure they stay visible */}
            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaFacebookF /></Link>
            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaLinkedinIn /></Link>
            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}