import React, { useEffect, useState } from 'react';

const ProgressBarComponent = ({ currentValue, maxValue, minValue, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(
      currentValue > maxValue
        ? maxValue
        : currentValue < minValue
        ? minValue
        : currentValue
    );
  }, [currentValue, maxValue, minValue]);

  return (
    <div>
      <label htmlFor="progress-bar">{label}</label>
      <progress id="progress-bar" value={progress} max={maxValue} >{`${currentValue}%`}</progress>
    </div>
  );
};

export default ProgressBarComponent;
