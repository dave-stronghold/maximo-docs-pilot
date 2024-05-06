'use client'
import React, { useState,useEffect } from 'react';
// import images from './imageData';
import ThumbnailsContainer from './ThumbnailsContainer';
import Thumbnail from './Thumbnail';
import Image from './Image';
import ImageFull from './ImageFull';
import Caption from './Caption';
import Counter from './Counter';
import Navigation from './Navigation';
import HeadingList from './HeadingList';
import Pagination from './Pagination';
import Autoplay from './Autoplay';
import StepSlider from './StepSlider';
import SpeedSlider from './SpeedSlider';
import AudioPlayer from './AudioPlayer';
import { useAtom } from 'jotai';
import { isPlayingAtom, activeIndexAtom } from './atoms'; // Import the atoms
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import {Fullscreen} from 'lucide-react';

const Gallery = ({ images }) => {
    const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom); // Get the value and setter for isPlaying
    const [activeIndex, setActiveIndex] = useAtom(activeIndexAtom);
    const [fullscreen, setFullscreen] = useState(false);
    // const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        return () => {
            setIsPlaying(false);
            setActiveIndex(0);
        };
    }, [setIsPlaying]);
    const timestamps = [
        0,       // Start of the audio
        13.01,
        17.80,
        23.00,
        28.75,      // 30 seconds into the audio
        34.15,
        41,      // 1 minute into the audio
        55,
        59,
        69,
        78,      // 1 minute and 30 seconds into the audio
        80.8,     // End of the audio (2 minutes)
        // Add more timestamps as needed
    ];
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
    const handleTimestampClick = (timestamp) => {
        // Find the index of the slide corresponding to the timestamp
        const index = images.findIndex((image) => image.timestamp === timestamp);
        if (index !== -1) {
            setActiveIndex(index);
        }
    };
    const handleFullScreen = () => {
        setFullscreen(!fullscreen);
    }
    return (
        <div className="container mx-auto py-4 not-prose">
            <ThumbnailsContainer images={images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <Image src={images[activeIndex].src} alt={images[activeIndex].alt} />
            <Fullscreen onClick={handleFullScreen}/>
            {fullscreen&&<ImageFull src={images[activeIndex].src} handleFullScreen={handleFullScreen} alt={images[activeIndex].alt} />}
            <Caption heading={images[activeIndex].heading} caption={images[activeIndex].caption} />
            {/* <Pagination
        currentPage={activeIndex + 1} // Adjust the current page number since index starts from 0
        totalPages={images.length}
        onPageChange={handlePageChange}
    /> */}
            <Tabs items={['Autoplay', 'Audio Walkthrough']}>
                <Tab value="Autoplay">
                    <div className='flex flex-row w-full justify-between items-center'>
                        <Counter activeIndex={activeIndex} totalImages={images.length} />
                        <SpeedSlider />
                        <Navigation
                            handleFirst={handleFirst}
                            handlePrev={handlePrev}
                            handleNext={handleNext}
                            handleLast={handleLast}
                        />
                    </div>
                    <div className='flex flex-row w-full justify-between items-start'>
                        <Autoplay images={images} />
                        <StepSlider
                            totalSteps={images.length}
                            currentStep={activeIndex}
                            onChange={handleStepChange}
                        />
                    </div>
                </Tab>
                <Tab value="Audio Walkthrough">
                    <AudioPlayer audioSrc={'/audio/mixed.mp3'} timestamps={timestamps} setActiveIndex={setActiveIndex} onTimestampClick={handleTimestampClick} />
                    
                </Tab>
            </Tabs>

            <HeadingList
                images={images}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />

        </div>
    );
};

export default Gallery;
