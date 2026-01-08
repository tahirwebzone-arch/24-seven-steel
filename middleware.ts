import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  // 1. Add this line to stop the browser from forcing Arabic
  localeDetection: false 
});
 
export const config = {
  // Match only internationalized pathnames
  // 2. Ensure your matcher includes the root and all paths
  matcher: ['/', '/(ar|en)/:path*']
};