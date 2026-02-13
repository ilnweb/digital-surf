'use client';

import { useState } from 'react';
import { useLocale } from '../../Providers';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'bg', label: 'BG' },
  { code: 'pl', label: 'PL' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = code => {
    setLocale(code);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '40px',
          padding: '2px 4px',
          border: '1px solid #f0f0f0',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        {currentLanguage?.label}
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            backgroundColor: 'transparent',
            border: '1px solid #f0f0f0',
            marginTop: '2px',
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {languages.map(lang => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              style={{
                padding: '6px 8px',
                cursor: 'pointer',
                fontSize: '14px',
                textAlign: 'center',
                borderBottom: lang.code === 'pl' ? 'none' : '1px solid #eee',
              }}
              onMouseEnter={e => (e.target.style.backgroundColor = '#f5f5f5')}
              onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
