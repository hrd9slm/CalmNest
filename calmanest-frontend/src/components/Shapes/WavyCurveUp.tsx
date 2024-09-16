import React from 'react';

const WavyCurveUp: React.FC = () => {
  return (
    <div className="relative bg-light-green">
    <svg
      className="absolute top-0 left-0 w-full"
      viewBox="0 55 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#DEF9C4"
        d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,144C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div className="h-14"></div>
  </div>
  );
};

export default WavyCurveUp;