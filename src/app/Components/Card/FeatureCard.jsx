import Image from 'next/image';

const FeatureCard = ({ img, title, content }) => {
  return (
    <div className='fancy-box style2 d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start'>
      <div className='icon mb-3 mb-md-0'>
        <Image src={img} alt='img' width={80} height={80} />
      </div>
      <div className='content wow fadeInUp' data-wow-delay='.2s'>
        <h4>{title}</h4>
        <p className='text'>{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
