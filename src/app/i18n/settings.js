export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'bg'],
  localePrefix: 'as-needed'
};

export function getLocaleFromPathname(pathname) {
  const [, locale] = pathname.match(/^\/([a-z]{2})(\/|$)/) || [];
  return i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
}

export function getPathWithoutLocale(pathname) {
  return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
}
