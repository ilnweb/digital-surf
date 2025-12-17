import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix, pathnames } from './src/i18n/navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't add a locale prefix for the default locale
  localePrefix,

  // Pathnames to match for internationalization
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Match the root path
    '/',
    // Match paths with a locale prefix
    `/(en|bg)/:path*`
  ]
};
