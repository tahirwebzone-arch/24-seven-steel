import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google"; // 1. Import both fonts
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

// English Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
});

// Arabic Font - Highly readable for industrial/steel business
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "24 SEVEN | Leading Steel Company in KSA",
  description: "Steel Fabrication and Metal Laser Cutting",
};

export default async function RootLayout({
  children,
  params, 
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params to comply with Next.js 15 standards
  const { locale } = await params;

  // Validate supported locales
  if (!['en', 'ar'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isAr = locale === 'ar';

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body 
        className={`
          ${isAr ? cairo.className : inter.className} 
          antialiased bg-white text-gray-900
          ${isAr ? 'leading-relaxed' : 'leading-normal'}
        `}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}