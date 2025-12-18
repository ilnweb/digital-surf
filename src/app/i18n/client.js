'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'bg'];
export const localePrefix = 'as-needed';

export const { 
  Link, 
  redirect, 
  usePathname: useIntlPathname, 
  useRouter: useIntlRouter 
} = createSharedPathnamesNavigation({ locales, localePrefix });

export function useChangeLocale() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback((locale) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '');
    router.push(`/${locale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`);
  }, [pathname, router]);
}
