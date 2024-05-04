import React from 'react';

const Caption = ({ heading, caption }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h2 className="text-lg font-bold mb-2">{heading}</h2>
      <p className="text-sm">{caption}</p>
    </div>
  );
};

export default Caption;
