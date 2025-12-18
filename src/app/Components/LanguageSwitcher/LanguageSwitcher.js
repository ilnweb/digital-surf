'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { t, i18n } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    setCurrentLanguage(storedLang);
  }, []);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);

    // Update the URL with the new language
    const segments = pathname.split('/');
    if (['en', 'bg'].includes(segments[1])) {
      segments[1] = lng;
    } else {
      segments.splice(1, 0, lng);
    }
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='light' id='language-dropdown'>
        {currentLanguage === 'en' ? t('english') : t('bulgarian')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')} active={currentLanguage === 'en'}>
          {t('english')}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('bg')} active={currentLanguage === 'bg'}>
          {t('bulgarian')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
