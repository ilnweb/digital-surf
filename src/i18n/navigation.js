// The `locales` array contains all the locales that your application supports
export const locales = ["en", "bg"];

// The `defaultLocale` variable contains the default locale of your application
export const defaultLocale = "en";

// The `pathnames` object maps route paths to their translations
// The key is the path in the default locale, and the value is an object
// with the translations for each supported locale
export const pathnames = {
  "/": "/",
  "/home1": {
    en: "/home1",
    bg: "/home1",
  },
  "/home2": {
    en: "/home2",
    bg: "/home2",
  },
  "/home3": {
    en: "/home3",
    bg: "/home3",
  },
  "/innerpage": {
    en: "/innerpage",
    bg: "/innerpage",
  },
};

// The `localePrefix` setting determines how the locale is handled in URLs
// 'as-needed' - Only include the locale in the URL when it's not the default locale
// 'always' - Always include the locale in the URL, even for the default locale
// 'never' - Never include the locale in the URL
export const localePrefix = "as-needed";

// Helper function to get the pathname for a specific locale
export function getPathname(locale) {
  return function pathname(path) {
    const pathname = path in pathnames ? pathnames[path][locale] : path;
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  };
}
