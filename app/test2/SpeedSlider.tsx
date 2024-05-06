import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { speedAtom } from './atoms';

const SpeedSlider = () => {
  const [speed, setSpeed] = useAtom(speedAtom);
  const [initialSpeed, setInitialSpeed] = useState(speed);

  useEffect(() => {
    setInitialSpeed(speed);

    return () => {
      setSpeed(initialSpeed);
    };
  }, []); // Run once on mount

  const handleSpeedChange = (e) => {
    const sliderValue = parseInt(e.target.value);
    const reversedSpeed = 15 - sliderValue;
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
