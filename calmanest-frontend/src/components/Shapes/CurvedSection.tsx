import React from 'react';

const CurvedSection: React.FC = () => {
  return (
    <div className="relative bg-pink-100" >
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 -25 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFE9EC"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="h-16"></div>
    </div>
  );
};

export default CurvedSection;