import Image from 'next/image';
import FeatureCard from '../Card/FeatureCard';
import SectionTitle from '../Common/SectionTitle';

const Feature1 = () => {
  return (
    <section className='wcu-section section-padding fix'>
      <div className='wcu-container-wrapper style1'>
        <div className='container'>
          <div
            className='section-title text-center mxw-685 mx-auto wow fadeInUp'
            data-wow-delay='.2s'
          >
            <SectionTitle SubTitle='Why using our app' Title='What we offer'></SectionTitle>
          </div>
          <div className='wcu-wrapper style1'>
            <div className='row gy-5 d-flex justify-content-center'>
              <div className='col-xl-4 d-flex justify-content-center'>
                <div className='wcu-content'>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_1.svg'
                    title='AI automations'
                    content='Automate repetitive tasks with AI-powered workflows'
                  ></FeatureCard>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_2.svg'
                    title='Web design'
                    content='Great looking and competitive websites'
                  ></FeatureCard>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_3.svg'
                    title='Chat bots'
                    content='Chat bots for customer support'
                  ></FeatureCard>
                </div>
              </div>
              <div className='col-xl-4 d-flex justify-content-center'>
                <div className='wcu-thumb wow fadeInUp' data-wow-delay='.2s'>
                  <div className='main-thumb wow bounceInUp' data-wow-delay='.6s'>
                    <Image
                      src='/assets/images/wcu/wcuThumb1_1.png'
                      alt='img'
                      width={376}
                      height={342}
                    />
                  </div>
                  <div className='shape'>
                    <Image
                      src='/assets/images/shape/wcuThumbShape1_1.png'
                      alt='img'
                      width={376}
                      height={377}
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-4 d-flex justify-content-center justify-content-xl-end'>
                <div className='wcu-content'>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_4.svg'
                    title='Free Live Chat'
                    content='There are many variations of passages of Lorem Ipsum'
                  ></FeatureCard>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_5.svg'
                    title='Social Share'
                    content='There are many variations of passages of Lorem Ipsum'
                  ></FeatureCard>
                  <FeatureCard
                    img='/assets/images/icon/wcuIcon1_6.svg'
                    title='Custom Shortcuts'
                    content='There are many variations of passages of Lorem Ipsum'
                  ></FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
