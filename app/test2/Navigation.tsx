import React from 'react';
import { Home, ArrowLeftCircle, ArrowRightCircle, ChevronLast } from 'lucide-react'
const Navigation = ({ handleFirst, handlePrev, handleNext, handleLast }) => {
  return (
    <div className="flex items-center justify-center max-w-min">
      <button onClick={handleFirst} className="mr-2 hover:scale-125 transition-transform">
        <Home />
      </button>
      <button onClick={handlePrev} className="mr-2 hover:scale-125 transition-transform">
        <ArrowLeftCircle />
      </button>
      <button onClick={handleNext} className="mr-2 hover:scale-125 transition-transform">
        <ArrowRightCircle />
      </button>
      <button onClick={handleLast} className="mr-2 hover:scale-125 transition-transform"><ChevronLast /></button>
    </div>
  );
};

export default Navigation;
