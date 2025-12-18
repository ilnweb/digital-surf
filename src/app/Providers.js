'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../i18n/client';

export function Providers({ children, lng }) {
  const [instance] = useState(() => {
    // Initialize i18n with the language from the URL
    if (lng) {
      i18n.changeLanguage(lng);
    }
    return i18n;
  });

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}
