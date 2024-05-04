import React, { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, StopCircle, Repeat } from 'lucide-react';

const Autoplay = ({ images, activeIndex, setActiveIndex }) => {
  const [speed, setSpeed] = useState(14); // Default speed
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerId, setTimerId] = useState(null);

  // Function to handle autoplay logic
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, speed * 100);
      setTimerId(intervalId);
    } else {
      clearInterval(timerId);
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

  const handleSpeedChange = (e) => {
    // Reverse the speed value based on the slider value
    const sliderValue = parseInt(e.target.value);
    const reversedSpeed = 15 - sliderValue; // Inverse the slider value to get the speed
    setSpeed(reversedSpeed);
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
      <button onClick={handleReplay}>
        <Repeat />
      </button>
      <div>
       
        <input className='w-24 mr-2'
          type="range"
          min="1"
          max="10"
          value={15-speed} // Reverse the speed value for the slider
          onChange={handleSpeedChange}
        />
      
        <p>Speed: {15-speed}x</p>
      </div>
    </div>
  );
};

export default Autoplay;
