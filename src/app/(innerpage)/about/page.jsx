'use client';
import About from '@/app/Components/ProjectDetails/ProjectDetails';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('Navigation');

  return (
    <div>
      <BreadCumb bgimg='/assets/images/bg/breadcumgBg.png' Title={t('aboutUs')}></BreadCumb>
      <About />
    </div>
  );
};

export default page;
