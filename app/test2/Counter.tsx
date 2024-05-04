import React from 'react';

const Counter = ({ activeIndex, totalImages }) => {
  return (
    <div className="text-center my-4">
      <p className="text-lg font-bold">{`Step ${activeIndex + 1} of ${totalImages}`}</p>
    </div>
  );
};

export default Counter;
