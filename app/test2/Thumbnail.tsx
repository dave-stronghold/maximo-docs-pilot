import React from 'react';

const Thumbnail = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      // className="w-full h-full object-cover cursor-pointer"
      style={{
        width:'100%',
        height:'100%',
        objectFit: 'cover',
      }}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
