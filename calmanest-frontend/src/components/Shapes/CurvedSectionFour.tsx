import React from 'react';

const CurvedSectionFour: React.FC = () => {
  return (
    <div className="relative">
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#F8BBD0" // pink-100
        d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,186.7C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    <div className="bg-pink-100 h-24"></div> 
  </div>
  );
};

export default CurvedSectionFour;