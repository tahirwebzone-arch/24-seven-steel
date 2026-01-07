"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import FreeQuoteForm from "@/components/FreeQuoteForm";
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('Portfolio');

  const projectTags = [
    t('tags.corporate'), t('tags.technical'), t('tags.minimal'),
    t('tags.vision'), t('tags.elegant')
  ];

  const projects = [
    { id: 1, src: "/projects/industrial-1.png", alt: t('projects.p1') },
    { id: 2, src: "/projects/interior-1.png", alt: t('projects.p2') },
    { id: 3, src: "/projects/industrial-2.png", alt: t('projects.p3') },
    { id: 4, src: "/projects/interior-2.png", alt: t('projects.p4') },
    { id: 5, src: "/projects/industrial-3.png", alt: t('projects.p5') },
    { id: 6, src: "/projects/interior-3.png", alt: t('projects.p6') },
  ];

  return (
    <main className="bg-white">
      <Hero 
        title={t('heroTitle')} 
        imageSrc="/hero-portfolio.png" 
        showForm={false} 
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header Content - text-start handles LTR/RTL */}
        <div className="space-y-6 mb-16 text-start">
          <h2 className="text-3xl font-bold text-red-600">{t('sectionTitle')}</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            {t('sectionDesc')}
          </p>

          {/* Project Feature Tags */}
          <div className="grid grid-cols-1 md:flex md:flex-wrap gap-4 pt-4 max-w-3xl">
            {projectTags.map((tag) => (
              <div key={tag} className="flex items-center gap-2 bg-gray-100 border-2 border-gray-200 px-4 py-2 rounded-lg">
                <CheckCircle2 className="text-white fill-green-500 shrink-0" size={30} />
                <span className="font-semibold text-gray-800 text-lg">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Quality Behind Our Work Grid */}
        <div className="space-y-10 text-start">
          <h3 className="text-2xl font-bold text-red-600">{t('qualityTitle')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Text - text-start ensures name is on the right in Arabic */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 text-start">
                   <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform">
                     {project.alt}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1b2e] py-2 px-6">
        <FreeQuoteForm layout="horizontal" />
      </section>
    </main>
  );
}