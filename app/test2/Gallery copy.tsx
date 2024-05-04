'use client'
import React, { useState } from 'react';
// import images from './imageData';
import ThumbnailsContainer from './ThumbnailsContainer';
import Thumbnail from './Thumbnail';
import Image from './Image';
import Caption from './Caption';
import Counter from './Counter';
import Navigation from './Navigation';
import HeadingList from './HeadingList';
import Pagination from './Pagination';
import Autoplay from './Autoplay';
import StepSlider from './StepSlider';
import SpeedSlider from './SpeedSlider';
import { useAtom } from 'jotai';
import { isPlayingAtom, activeIndexAtom } from './atoms'; // Import the atoms

const Gallery = ({ images }) => {
    const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom); // Get the value and setter for isPlaying
    const [activeIndex, setActiveIndex] = useAtom(activeIndexAtom);
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
    const handleStepChange = (stepIndex) => {
        setActiveIndex(stepIndex);
    };

    return (
        <div className="container mx-auto py-4 not-prose">
            <ThumbnailsContainer images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <Image src={images[activeIndex].src} alt={images[activeIndex].alt} />
            <Caption heading={images[activeIndex].heading} caption={images[activeIndex].caption} />
            {/* <Pagination
        currentPage={activeIndex + 1} // Adjust the current page number since index starts from 0
        totalPages={images.length}
        onPageChange={handlePageChange}
    /> */}
            <div className='flex flex-row w-full justify-between items-center'>
                <Counter activeIndex={activeIndex} totalImages={images.length} />
                <Navigation
                    handleFirst={handleFirst}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    handleLast={handleLast}
                />
            </div>
            <HeadingList
                images={images}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
            <div className='flex flex-row w-full justify-between items-start'>
                <Autoplay images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <StepSlider
                    totalSteps={images.length}
                    currentStep={activeIndex}
                    onChange={handleStepChange}
                />
            </div>
            <SpeedSlider />
        </div>
    );
};

export default Gallery;
