'use client'
import React, { useState } from 'react';
import images from './imageData';
import ThumbnailsContainer from './ThumbnailsContainer';
import Thumbnail from './Thumbnail';
import Image from './Image';
import Caption from './Caption';
import Counter from './Counter';
import Navigation from './Navigation';
import HeadingList from './HeadingList';
import Pagination from './Pagination';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
    const handlePageChange = (pageIndex) => {
        setActiveIndex(pageIndex - 1); // Adjust the index since page numbers start from 1
      };

    return (
        <div className="container mx-auto py-4 not-prose">
            <ThumbnailsContainer images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <Image src={images[activeIndex].src} alt={images[activeIndex].alt} />
            <Caption heading={images[activeIndex].heading} caption={images[activeIndex].caption} />
            <Navigation
                handleFirst={handleFirst}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleLast={handleLast}
            />
              <Pagination
        currentPage={activeIndex + 1} // Adjust the current page number since index starts from 0
        totalPages={images.length}
        onPageChange={handlePageChange}
      />
            <Counter activeIndex={activeIndex} totalImages={images.length} />
            <HeadingList
                images={images}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </div>
    );
};

export default Gallery;
