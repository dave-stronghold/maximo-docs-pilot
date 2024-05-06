import React, { useEffect, useRef } from 'react';
import { XCircle } from 'lucide-react';

const ImageFull = ({ src, alt, handleFullScreen, handlePrev, handleNext, activeIndex,totalImages }) => {
  const cont = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleFullScreen();
      }
      if (event.key === 'ArrowLeft'&& activeIndex > 0) {
        handlePrev();
      }
      if (event.key === 'ArrowRight'&& activeIndex < totalImages-1) {
        handleNext();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFullScreen,handlePrev,handleNext]);

  return (
    <div
      ref={cont}
      className='aspect-[16/9] h-full mx-auto w-full fixed top-0 z-[100] left-0 bg-black '
    >
      <XCircle
        className='fixed top-4 right-8 cursor-pointer text-white'
        onClick={handleFullScreen}
      />
      <img src={src} alt={alt} className='w-full h-full object-contain' />
    </div>
  );
};

export default ImageFull;
