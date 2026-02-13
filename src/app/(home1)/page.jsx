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
      />
      <Feature1 />
      <div style={{ marginTop: '160px', marginBottom: '160px' }}>
        <Cta1 />
      </div>

      <div style={{ marginTop: '260px', marginBottom: '160px' }}>
        <About1
          img1='/assets/images/about/aboutThumb1_1.png'
          img2='/assets/images/about/aboutThumb1_2.png'
          btnurl='/about'
        />
      </div>

      <div style={{ marginTop: '120px', marginBottom: '120px' }}>
        <Choose1 btnurl='/about' />
      </div>
      <Choose4 />
      <div style={{ marginTop: '120px', marginBottom: '120px' }}>
        <HowWork />
      </div>

      <div style={{ marginTop: '60px', marginBottom: '120px' }}>
        <Faq1 />
      </div>

      <div style={{ marginTop: '120px', marginBottom: '120px' }}>
        <Cta1 />
      </div>
    </div>
  );
};

export default page;
