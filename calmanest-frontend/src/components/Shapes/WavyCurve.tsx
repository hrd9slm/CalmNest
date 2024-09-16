import React from 'react';

const WavyCurve: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,160C480,149,600,139,720,160C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavyCurve;