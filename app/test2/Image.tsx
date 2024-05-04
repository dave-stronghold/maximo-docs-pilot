import React from 'react';

const Image = ({ src, alt }) => {
  return (
    <div className='aspect-[16/9] max-w-[800px] mx-auto'>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Image;
