import React from 'react';

const StepSlider = ({ totalSteps, currentStep, onChange }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    onChange(value - 1); // Adjust index starting from 0
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="range"
        min="1"
        max={totalSteps}
        value={currentStep + 1} // Adjust value starting from 1
        onChange={handleChange}
        className="mr-2 w-full"
      />
      <span>{currentStep + 1}</span> {/* Adjust display starting from 1 */}
    </div>
  );
};

export default StepSlider;
