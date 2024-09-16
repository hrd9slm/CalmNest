import React from 'react';


    const DecorativeComponent: React.FC = () => {
      return (
        <div className="relative">
        {/* Partie supérieure avec une courbe */}
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E0F2F1" // green-50
            d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,144C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
        <div className="bg-green-50 h-56"></div> {/* 70% de la hauteur totale */}
        {/* Partie inférieure avec une courbe */}
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
        <div className="bg-pink-100 h-">24</div> {/* 30% de la hauteur totale */}
      </div>
  );
};

    
    export default DecorativeComponent;
