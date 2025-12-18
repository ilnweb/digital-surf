import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className='min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-4'>{t('title')}</h1>
      <p className='mb-6'>{t('description')}</p>
      <Link href='/about' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        {t('aboutLink')}
      </Link>
    </main>
  );
}
