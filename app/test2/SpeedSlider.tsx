import React from 'react';
import { useAtom } from 'jotai';
import { speedAtom } from './atoms';

const SpeedSlider = () => {
  const [speed, setSpeed] = useAtom(speedAtom);

//   const handleSpeedChange = (e) => {
//     const newSpeed = parseInt(e.target.value);
//     setSpeed(newSpeed);
//   };
  const handleSpeedChange = (e) => {
    // Reverse the speed value based on the slider value
    const sliderValue = parseInt(e.target.value);
    const reversedSpeed = 15 - sliderValue; // Inverse the slider value to get the speed
    setSpeed(reversedSpeed);
  };
  return (
    <div className='mt-2 w-min flex justify-center flex-row gap-2'>
      <input
        type="range"
        min="1"
        max="10"
        value={15-speed}
        onChange={handleSpeedChange}
      />
      <p className='w-24'>Speed: {15-speed}x</p>
    </div>
  );
};

export default SpeedSlider;
