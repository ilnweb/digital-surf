'use client';
import Slider from 'react-slick';
import data from '../../Data/project2.json';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Cta1 from '../Cta/Cta1';
const About = () => {
  const t = useTranslations('About');
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className='project-details-section section-padding fix'
      style={{ position: 'relative', zIndex: 99998, marginTop: '-5rem' }}
    >
      <div className='project-details-container-wrapper'>
        <div className='container'>
          <div className='project-details-wapper'>
            <div className='row'>
              <div className='col-12'>
                <div
                  className='main-thumb'
                  style={{ position: 'relative', zIndex: 99999, marginBottom: '4rem' }}
                >
                  <img
                    src='/assets/images/about/about-hero.jpg'
                    alt='About DigitalSurf'
                    style={{
                      maxWidth: '1000px',
                      height: 'auto',
                      borderRadius: '24px',
                      margin: '0 auto',
                      marginTop: '-7rem',
                      display: 'block',
                      position: 'relative',
                      zIndex: 99999,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
              </div>
              <div className='single-desc' style={{ marginTop: '6rem' }}>
                <div className='row gy-5'>
                  <div className='col-12'>
                    <h3 className='single-desc-title'>{t('aboutAgency.title')}</h3>
                    <p className='text1' style={{ textTransform: 'none' }}>
                      {t('aboutAgency.content1')}
                    </p>

                    <p className='text2' style={{ textTransform: 'none' }}>
                      {t('aboutAgency.content2')}
                    </p>
                  </div>
                </div>
              </div>
              <div className='testimonial-wrap' style={{ marginBottom: '4rem' }}>
                <div className='row gy-5'>
                  <div className='col-xl-12'>
                    <div className='testimonial-card'>
                      <div className='tesimonial-content'>
                        <div className='icon'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='53'
                            height='38'
                            viewBox='0 0 53 38'
                            fill='none'
                          >
                            <path
                              d='M52.5 23.4375C52.5 31.207 46.207 37.5 38.4375 37.5H37.5C35.4258 37.5 33.75 35.8242 33.75 33.75C33.75 31.6758 35.4258 30 37.5 30H38.4375C42.0586 30 45 27.0586 45 23.4375V22.5H37.5C33.3633 22.5 30 19.1367 30 15V7.5C30 3.36328 33.3633 0 37.5 0H45C49.1367 0 52.5 3.36328 52.5 7.5V11.25V15V23.4375ZM22.5 23.4375C22.5 31.207 16.207 37.5 8.4375 37.5H7.5C5.42578 37.5 3.75 35.8242 3.75 33.75C3.75 31.6758 5.42578 30 7.5 30H8.4375C12.0586 30 15 27.0586 15 23.4375V22.5H7.5C3.36328 22.5 0 19.1367 0 15V7.5C0 3.36328 3.36328 0 7.5 0H15C19.1367 0 22.5 3.36328 22.5 7.5V11.25V15V23.4375Z'
                              fill='#7444FD'
                            />
                          </svg>
                        </div>
                        <p className='text3' style={{ textTransform: 'none' }}>
                          {t('vision.quote')}
                        </p>
                      </div>
                      <div className='testimonial-author'>{t('vision.author')}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='single-desc2' style={{ marginBottom: '4rem' }}>
                <div className='row gy-5'>
                  <div className='col-12'>
                    <h3 className='single-desc-title'>{t('whyChooseUs.title')}</h3>
                    <p className='text1' style={{ textTransform: 'none' }}>
                      {t('whyChooseUs.content1')}
                    </p>

                    <p className='text2' style={{ textTransform: 'none' }}>
                      {t('whyChooseUs.content2')}
                    </p>
                    <div className='row mt-4'>
                      <div className='col-md-4 mb-3'>
                        <h6>{t('whyChooseUs.seoCode.title')}</h6>
                        <p>{t('whyChooseUs.seoCode.description')}</p>
                      </div>
                      <div className='col-md-4 mb-3'>
                        <h6>{t('whyChooseUs.aiIntegration.title')}</h6>
                        <p>{t('whyChooseUs.aiIntegration.description')}</p>
                      </div>
                      <div className='col-md-4 mb-3'>
                        <h6>{t('whyChooseUs.uiux.title')}</h6>
                        <p>{t('whyChooseUs.uiux.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Steps Gallery */}
              {/* <div className='slider-area projectSliderThree'>
                <div className='section-title text-center mb-5'>
                  <h2 className='title'>{t('process.title')}</h2>
                </div>
                <div className='swiper gt-slider' id='projectSliderThree'>
                  <div className='swiper-wrapper cs_slider_gap_301'>
                    <Slider {...settings}>
                      <div className='swiper-slide'>
                        <div className='process-step'>
                          <img src='/assets/images/process/discovery.jpg' alt='Discovery' />
                          <h5>{t('process.discovery.title')}</h5>
                          <p>{t('process.discovery.description')}</p>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='process-step'>
                          <img src='/assets/images/process/architecture.jpg' alt='Architecture' />
                          <h5>{t('process.architecture.title')}</h5>
                          <p>{t('process.architecture.description')}</p>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='process-step'>
                          <img src='/assets/images/process/development.jpg' alt='Development' />
                          <h5>{t('process.development.title')}</h5>
                          <p>{t('process.development.description')}</p>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='process-step'>
                          <img src='/assets/images/process/optimization.jpg' alt='Optimization' />
                          <h5>{t('process.optimization.title')}</h5>
                          <p>{t('process.optimization.description')}</p>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='process-step'>
                          <img src='/assets/images/process/launch.jpg' alt='Launch' />
                          <h5>{t('process.launch.title')}</h5>
                          <p>{t('process.launch.description')}</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Cta1 />
    </section>
  );
};

export default About;
