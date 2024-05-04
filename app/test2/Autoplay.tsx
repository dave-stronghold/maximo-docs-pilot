import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { PlayIcon, PauseIcon, StopCircle, Repeat } from 'lucide-react';
import { isPlayingAtom, activeIndexAtom,speedAtom } from './atoms';

const Autoplay = ({ images }) => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [activeIndex, setActiveIndex] = useAtom(activeIndexAtom);
  const [speed, setSpeed] = useAtom(speedAtom);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, (speed) * 100);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, speed, images.length]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setActiveIndex(0);
  };

  const handleReplay = () => {
    setIsPlaying(true);
    setActiveIndex(0);
  };
  

  return (
    <div className='flex gap-2'>
      <button onClick={handlePlay}>
        <PlayIcon />
      </button>
      <button onClick={handlePause}>
        <PauseIcon />
      </button>
      <button onClick={handleStop}>
        <StopCircle />
      </button>
      <button onClick={handleReplay} className='mr-3'>
        <Repeat />
      </button>
    </div>
  );
};

export default Autoplay;
