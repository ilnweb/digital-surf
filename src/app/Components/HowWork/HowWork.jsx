'use client';

import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslations } from 'next-intl';

const HowWork = () => {
  const t = useTranslations('HowWork');

  return (
    <section className='work-process-section section-padding fix' style={{ padding: '80px 0' }}>
      <div className='work-process-container-wrapper style1'>
        <div className='container'>
          <div className='section-title text-center mxw-565 mx-auto'>
            <SectionTitle SubTitle={t('subtitle')} Title={t('title')}></SectionTitle>
          </div>
          <div className='work-process-wrapper style1'>
            <div className='shape'>
              <Image
                src='/assets/images/shape/workProcessShape1_1.png'
                alt='img'
                width={1416}
                height={225}
              />
            </div>
            <div className='row'>
              <div className='col-xl-4'>
                <div className='work-process-box style1 wow fadeInUp' data-wow-delay='.2s'>
                  <div className='step'>{t('step1.title')}</div>
                  <div className='title'>{t('step1.heading')}</div>
                  <div className='text'>{t('step1.description')}</div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='work-process-box style1 child2 wow fadeInUp' data-wow-delay='.4s'>
                  <div className='step'>{t('step2.title')}</div>
                  <div className='title'>{t('step2.heading')}</div>
                  <div className='text'>{t('step2.description')}</div>
                </div>
              </div>
              <div className='col-xl-4'>
                <div className='work-process-box style1 wow fadeInUp' data-wow-delay='.6s'>
                  <div className='step'>{t('step3.title')}</div>
                  <div className='title'>{t('step3.heading')}</div>
                  <div className='text'>{t('step3.description')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
