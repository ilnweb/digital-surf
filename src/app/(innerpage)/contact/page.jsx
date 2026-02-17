'use client';

import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo from '@/app/Components/ContactInfo/ContactInfo';
import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('ContactInfo');

  return (
    <div>
      <BreadCumb bgimg='/assets/images/bg/breadcumgBg.png' Title={t('breadcrumbTitle')}></BreadCumb>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default page;
