'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useState, useEffect, createContext, useContext, useCallback } from 'react';

const locales = ['en', 'bg', 'pl'];
const defaultLocale = 'en';

export const LocaleContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  locales: locales,
});

export function useLocale() {
  return useContext(LocaleContext);
}

async function loadMessages(locale) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch {
    return (await import(`../messages/${defaultLocale}.json`)).default;
  }
}

export function Providers({ children }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [messages, setMessages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateKey, setUpdateKey] = useState(0);

  const setLocale = useCallback(async newLocale => {
    if (!locales.includes(newLocale)) return;
    const newMessages = await loadMessages(newLocale);
    setMessages(newMessages);
    setLocaleState(newLocale);
    setUpdateKey(k => k + 1);
    localStorage.setItem('locale', newLocale);
  }, []);

  useEffect(() => {
    const init = async () => {
      const savedLocale = localStorage.getItem('locale') || defaultLocale;
      const validLocale = locales.includes(savedLocale) ? savedLocale : defaultLocale;
      const initialMessages = await loadMessages(validLocale);
      setMessages(initialMessages);
      setLocaleState(validLocale);
      setIsLoading(false);
    };
    init();
  }, []);

  if (isLoading || !messages) {
    return null;
  }

  return (
    <NextIntlClientProvider
      key={`${locale}-${updateKey}`}
      locale={locale}
      messages={messages}
      onError={() => {}}
    >
      <LocaleContext.Provider value={{ locale, setLocale, locales }}>
        {children}
      </LocaleContext.Provider>
    </NextIntlClientProvider>
  );
}
