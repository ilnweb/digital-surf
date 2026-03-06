import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Choose4 from '../Components/Choose/Choose4';
import Feature1 from '../Components/Feature/Feature1';
import Faq1 from '../Components/Faq/Faq1';
import Cta1 from '../Components/Cta/Cta1';

const page = () => {
  return (
    <div>
      <HeroBanner1
        btnurl='/contact'
        btn2url='/about'
        img='/assets/images/intro/introThumb1_1.png'
        hideImgMobile
      />
      <Feature1 hideImgMobile />
      <div className='section-gap'>
        <Cta1 />
      </div>

      <div className='section-gap section-gap--large'>
        <About1
          img1='/assets/images/about/aboutThumb1_1.png'
          img2='/assets/images/about/aboutThumb1_2.png'
          btnurl='/about'
          hideImgMobile
        />
      </div>

      <div className='section-gap'>
        <Choose1 btnurl='/about' hideImgMobile />
      </div>
      <Choose4 hideImgMobile />
      <div className='section-gap'>
        <HowWork />
      </div>

      <div className='section-gap'>
        <Faq1 hideImgMobile />
      </div>

      <div className='section-gap'>
        <Cta1 />
      </div>
    </div>
  );
};

export default page;
