"use client";
import { useTranslations, useLocale } from 'next-intl';
import { handleHeroForm } from "@/app/actions/formSubmit";

interface FormProps {
  layout?: "horizontal" | "vertical";
  serviceSlug?: string; // Add this prop to capture the page slug
}

export default function FreeQuoteForm({ layout = "vertical", serviceSlug = "N/A" }: FormProps) {
  const t = useTranslations('QuoteForm');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const clientAction = async (formData: FormData) => {
    await handleHeroForm(formData);
    alert(isAr ? "شكراً لك! سنتصل بك قريباً." : "Thank you! We will contact you soon.");
  };

  // Horizontal View (For Portfolio & Vision 2030 pages)
  if (layout === "horizontal") {
    return (
      <section className="bg-[#1a1b2e] py-12 px-8 rounded-[40px] max-w-7xl mx-auto my-16">
        <div className="max-w-6xl mx-auto text-white">
          <div className="mb-10 text-start">
            <h2 className="text-4xl font-bold mb-2">{t('title')}</h2>
            <p className="text-gray-400 text-lg">{t('subtitle_horizontal')}</p>
          </div>
          
          <form action={clientAction} className="flex flex-col md:flex-row items-end gap-6">
            <input type="hidden" name="formType" value="Services Horizontal Quote" />
            {/* Pass the service name to the server action */}
            <input type="hidden" name="service" value={serviceSlug} />
            
            <div className="flex-1 w-full space-y-3 text-start">
              <label className="text-sm font-bold px-2">{t('label_name')}</label>
              <input 
                name="name" 
                type="text" 
                required
                placeholder={t('placeholder_name')} 
                className="w-full bg-white text-gray-900 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none" 
              />
            </div>
            <div className="flex-1 w-full space-y-3 text-start">
              <label className="text-sm font-bold px-2">{t('label_contact')}</label>
              <input 
                name="contact" 
                type="text" 
                required
                placeholder={t('placeholder_contact')} 
                className="w-full bg-white text-gray-900 rounded-xl px-5 py-4 focus:ring-2 focus:ring-red-600 outline-none" 
              />
            </div>
            <button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg text-lg uppercase cursor-pointer">
              {t('button')}
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Vertical View (Default for Service pages)
  return (
    <div className="bg-[#1a1b2e] p-8 rounded-2xl text-white h-fit sticky top-24 text-start">
      <h3 className="text-2xl font-bold mb-2">{t('title')}</h3>
      <p className="text-gray-400 text-sm mb-6">{t('subtitle_vertical')}</p>
      
      <form action={clientAction} className="space-y-4">
        <input type="hidden" name="formType" value="Services Vertical Quote" />
        {/* Pass the service name to the server action */}
        <input type="hidden" name="service" value={serviceSlug} />

        <div>
          <label className="block text-md mb-1 font-semibold text-gray-300">{t('label_name')}</label>
          <input 
            name="name" 
            type="text" 
            required
            placeholder={t('placeholder_name')} 
            className="w-full p-3 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-red-600 transition-all placeholder:text-gray-400" 
          />
        </div>
        
        <div>
          <label className="block text-md mb-1 font-semibold text-gray-300">{t('label_contact')}</label>
          <input 
            name="contact" 
            type="text" 
            required
            placeholder={t('placeholder_contact')} 
            className="w-full p-3 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-red-600 transition-all placeholder:text-gray-400" 
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-[#e21e26] hover:bg-red-700 cursor-pointer transition-colors py-3 rounded-md font-bold mt-4 uppercase tracking-wider active:scale-95"
        >
          {t('button')}
        </button>
      </form>
    </div>
  );
}