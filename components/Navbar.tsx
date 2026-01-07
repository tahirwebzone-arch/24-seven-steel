"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Link, useRouter, usePathname } from '@/i18n/routing'; 
import { useLocale, useTranslations } from 'next-intl';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  const locale = useLocale(); 
  const isAr = locale === 'ar';
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const s = useTranslations('ServicesItems');

  const servicesList = [
    { name: s('laser'), path: '/services/metal-laser-cutting' },
    { name: s('fabrication'), path: '/services/steel-fabrication' },
    { name: s('bending'), path: '/services/metal-bending' },
    { name: s('event'), path: '/services/event-production' },
    { name: s('wood'), path: '/services/woodery' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 font-sans shadow-lg tracking-tight">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4 max-w-[1440px] mx-auto">
        
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <Image 
              src="/logo-24-seven.png" 
              alt="Logo 24 Seven" 
              width={180} 
              height={47} 
              className="object-contain cursor-pointer w-[140px] md:w-[245px]"               
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-baseline gap-8 xl:gap-10 font-medium text-[15px] text-black">
          <Link href="/" className="hover:text-red-600 transition pb-1 cursor-pointer">{t('home')}</Link>
          <Link href="/about" className="hover:text-red-600 transition pb-1 cursor-pointer">{t('about')}</Link>
          
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1 group-hover:text-red-600 transition pb-1 cursor-pointer">
              <span>{t('services')}</span>
              <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180" />
            </div>
            {/* Dropdown alignment: right-0 for Arabic, left-0 for English */}
            <div className={`absolute top-full ${isAr ? 'right-0' : 'left-0'} hidden group-hover:block pt-3 z-50`}> 
              <div className="w-64 bg-white shadow-2xl rounded-sm border-t-2 border-red-600 py-2 cursor-pointer">
                {servicesList.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path} 
                    className="block px-6 py-3 text-[14px] text-gray-800 hover:bg-red-600 hover:text-white transition-all text-start"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="hover:text-red-600 transition pb-1 cursor-pointer">{t('portfolio')}</Link>
          <Link href="/contact" className="hover:text-red-600 transition pb-1 cursor-pointer">{t('contact')}</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link href="/ksavision" className="hover:scale-105 transition-transform duration-300">
            <Image src="/nav-vision-2030-logo.png" alt="Vision 2030" width={90} height={59} className="object-contain" priority />
          </Link>
          
          <a href="tel:+966558794336" className="flex items-center gap-2 bg-[#e21e26] text-white px-4 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer">
            <Phone size={14} fill="white" className={isAr ? "rotate-[270deg]" : ""} />
            <span className="font-semibold text-[16px] tracking-tighter" dir="ltr">+966 55 879 4336</span>
          </a>

          {/* Desktop Language Switcher */}
          <div className={`group relative cursor-pointer flex items-center gap-2 border-gray-200 ${isAr ? 'border-r pr-4' : 'border-l pl-4'}`}>
              <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-100">
                 <Image src={!isAr ? "/flag-icon-uk.png" : "/flag-icon-saudi.png"} alt="Flag" fill className="object-cover" />
              </div>
              <span className="text-sm font-bold text-black uppercase">{!isAr ? 'Eng' : 'Ar'}</span>
              <ChevronDown size={12} className="text-gray-400 group-hover:rotate-180 transition-transform" />
              
              <div className={`absolute top-full ${isAr ? 'left-0' : 'right-0'} hidden group-hover:block pt-4 z-50`}>
                <div className="bg-white rounded-lg border border-gray-100 w-32 overflow-hidden shadow-xl">
                  <button onClick={() => handleLanguageChange(isAr ? 'en' : 'ar')} className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 text-start cursor-pointer">
                    <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-100">
                      <Image src={isAr ? "/flag-icon-uk.png" : "/flag-icon-saudi.png"} alt="Flag" fill className="object-cover" />
                    </div>
                    <span className="text-sm font-medium">{isAr ? 'English' : 'العربية'}</span>
                  </button>
                </div>
              </div>
          </div>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="lg:hidden flex items-center gap-3 sm:gap-4">
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-2 pr-3 border-gray-200 focus:outline-none ${isAr ? 'border-l pl-3' : 'border-r'}`}
            >
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-100">
                  <Image src={!isAr ? "/flag-icon-uk.png" : "/flag-icon-saudi.png"} alt="Flag" fill className="object-cover" />
                </div>
                <span className="text-xs font-bold text-black uppercase tracking-tight">{!isAr ? 'Eng' : 'Ar'}</span>
                <ChevronDown size={10} className={`text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className={`absolute top-full ${isAr ? 'left-0' : 'right-0'} mt-4 w-40 bg-white rounded-lg border border-gray-100 z-[60] py-1 overflow-hidden shadow-2xl`}>
                <button 
                  onClick={() => handleLanguageChange(isAr ? 'en' : 'ar')}
                  className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-50 text-start border-b border-gray-50 transition-colors"
                >
                   <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <Image src={isAr ? "/flag-icon-uk.png" : "/flag-icon-saudi.png"} alt="Flag" fill className="object-cover" />
                   </div>
                   <span className="text-sm font-bold text-gray-900">{isAr ? 'English' : 'العربية'}</span>
                </button>
              </div>
            )}
          </div>

          <a href="tel:+966558794336" className="w-10 h-10 flex items-center justify-center bg-[#e21e26] text-white rounded-full transition-transform active:scale-90">
            <Phone size={18} fill="white" className={isAr ? "rotate-[270deg]" : ""} />
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none pl-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[90] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)} 
      />
      
      {/* Mobile Drawer Content - Slide from left for Arabic, right for English */}
      <div className={`fixed top-0 ${isAr ? 'left-0' : 'right-0'} h-full w-[280px] bg-white z-[100] lg:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : (isAr ? '-translate-x-full' : 'translate-x-full')
      }`}>
        <div className="p-6 space-y-8 text-start">
          <div className={`flex ${isAr ? 'justify-start' : 'justify-end'}`}>
            <button onClick={() => setIsOpen(false)}><X size={28} /></button>
          </div>
          
          <nav className="flex flex-col gap-6 font-semibold text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-red-600 border-b border-gray-100 pb-2">{t('home')}</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-2">{t('about')}</Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-gray-900">{t('services')}</span>
              <div className={`pr-4 pl-4 flex flex-col gap-3 ${isAr ? 'border-r-2' : 'border-l-2'} border-red-600`}>
                {servicesList.map((item) => (
                   <Link 
                     key={item.path} 
                     href={item.path} 
                     onClick={() => setIsOpen(false)} 
                     className="text-sm text-gray-600 font-medium hover:text-red-600"
                   >
                     {item.name}
                   </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-2">{t('portfolio')}</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-2">{t('contact')}</Link>
            
            <div className="pt-4 flex justify-start">
              <Link href="/ksavision" onClick={() => setIsOpen(false)}>
                <Image src="/nav-vision-2030-logo.png" alt="Vision 2030" width={90} height={59} className="object-contain" priority />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}