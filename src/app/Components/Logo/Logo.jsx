import React from 'react';

const Logo = ({ width = 280, height = 60, className = '', iconSize = 50, ...props }) => {
  return (
    <div
      className={`flex items-center ${className}`}
      style={{ width: 'auto', height: height }}
      {...props}
    >
      <img
        src='/assets/images/logo/Logo.svg'
        alt='DigitalSurf Logo'
        width={width}
        height={height}
        className='flex-shrink-0'
        style={{ height: height * 0.85, width: 'auto', alignSelf: 'center' }}
      />
    </div>
  );
};

export default Logo;
