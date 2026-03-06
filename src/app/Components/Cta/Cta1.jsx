'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Cta1 = ({ btnurl1, btnurl2, img }) => {
  const t = useTranslations('Cta1');
  return (
    <section className='cta-section mt-5' style={{ padding: '0 20px' }}>
      <div className='cta-container-wrapper style1'>
        <div className='cta-wrapper style1 section-padding fix' style={{ padding: '60px' }}>
          <div className='shape1 d-none d-xxl-block'>
            <Image src='/assets/images/shape/ctaShape1_1.png' alt='img' width={373} height={147} />
          </div>
          <div className='shape2 d-none d-xxl-block'>
            <Image src='/assets/images/shape/ctaShape1_2.png' alt='img' width={228} height={143} />
          </div>
          <div className='shape3 d-none d-xxl-block'>
            <Image src='/assets/images/shape/ctaShape1_3.png' alt='img' width={606} height={272} />
          </div>
          <div className='shape4 d-none d-xxl-block'>
            <Image src='/assets/images/shape/ctaShape1_4.png' alt='img' width={223} height={134} />
          </div>
          <div className='container'>
            <div className='row gy-5'>
              <div className='col-12 text-center'>
                <div className='cta-content'>
                  <div className='section-title text-center'>
                    <div className='subtitle text-white bg2 wow fadeInUp' data-wow-delay='.2s'>
                      {t('subtitle')}
                    </div>
                    <h2 className='title text-white wow fadeInUp' data-wow-delay='.4s'>
                      {t('title')}
                    </h2>
                    <p className='section-desc text-white wow fadeInUp' data-wow-delay='.6s'>
                      {t('content')}
                    </p>
                  </div>
                  <div className='text-center mt-4'>
                    <Link
                      className='theme-btn bg-black text-white wow fadeInUp'
                      data-wow-delay='.6s'
                      href='/contact'
                    >
                      {t('buttonText')}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_43_54)'>
                          <path
                            d='M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z'
                            fill='white'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_43_54'>
                            <rect width='16' height='16' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className='col-xl-4 order-1 order-xl-2'>
                <div className='cta-thumb wow fadeInUp' data-wow-delay='.2s'>
                  <Image src={img} alt='img' width={643} height={322} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
