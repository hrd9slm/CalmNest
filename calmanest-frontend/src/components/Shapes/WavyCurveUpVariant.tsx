import React from 'react';

const WavyCurveUpVariant: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 30 1440 170"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          fill="#DEF9C4"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavyCurveUpVariant;