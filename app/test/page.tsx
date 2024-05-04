'use client'
import React, { useState } from 'react';
import images from './imageData'; // Import the images array from imageData.js

// Thumbnail Component
const Thumbnail = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-16 h-16 object-cover cursor-pointer"
      onClick={onClick}
    />
  );
};

// Image Component
const Image = ({ src, alt, heading, caption }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={src} alt={alt} className="max-w-lg max-h-96 mb-4" />
      <h2 className="text-lg font-bold mb-2">{heading}</h2>
      <p className="text-sm">{caption}</p>
    </div>
  );
};

// Navigation Component
const Navigation = ({ handleFirst, handlePrev, handleNext, handleLast }) => {
    return (
      <div className="mt-4 flex items-center">
        <button onClick={handleFirst} className="mr-2">
          First
        </button>
        <button onClick={handlePrev} className="mr-2">
          Previous
        </button>
        <button onClick={handleNext} className="mr-2">
          Next
        </button>
        <button onClick={handleLast}>Last</button>
      </div>
    );
  };
  
  // Gallery Component
  const Gallery = ({ images, activeIndex, setActiveIndex }) => {
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const handleFirst = () => {
      setActiveIndex(0);
    };
  
    const handleLast = () => {
      setActiveIndex(images.length - 1);
    };
  
    return (
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-4">
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            heading={images[activeIndex].heading}
            caption={images[activeIndex].caption}
          />
          <Navigation
            handleFirst={handleFirst}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleLast={handleLast}
          />
        </div>
      </div>
    );
  };
  
  
  

// Counter Component
const Counter = ({ activeIndex, totalImages }) => {
  return (
    <div className="text-center my-4">
      <p className="text-lg font-bold">{`Image ${activeIndex + 1} of ${totalImages}`}</p>
    </div>
  );
};

// Heading List Component
const HeadingList = ({ images, activeIndex, setActiveIndex }) => {
  return (
    <div className="my-4">
      <ul className="flex flex-wrap justify-center flex-col">
        {images.map((image, index) => (
          <li key={index} className="mx-2 cursor-pointer" onClick={() => setActiveIndex(index)}>
            {image.heading}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Usage
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto py-8">
      <Gallery images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Counter activeIndex={activeIndex} totalImages={images.length} />
      <HeadingList images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default App;
