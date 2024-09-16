import React from 'react';

const Team: React.FC = () => {
  return (
    <div className= "" style={{ backgroundColor: '#ffe9ec' }}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placehold.co/150x150"
              alt="Therapist 1"
              className="rounded-full shadow-lg"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Therapist 2"
              className="rounded-full shadow-lg"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Therapist 3"
              className="rounded-full shadow-lg"
            />
            <img
              src="https://placehold.co/150x150"
              alt="Therapist 4"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-dark-blue mb-4">
            Des thérapeutes professionnels et accrédités en qui vous pouvez avoir confiance
          </h2>
          <p className="text-gray-600 mb-6">
            Profitez du plus grand réseau au monde de thérapeutes accrédités et expérimentés qui peuvent vous aider à résoudre une gamme de problèmes, notamment la dépression, l'anxiété, les relations, les traumatismes, le deuil, etc. Avec nos thérapeutes, vous bénéficiez du même professionnalisme et de la même qualité que vous attendez d’un thérapeute en cabinet, mais avec la capacité de communiquer quand et comment vous le souhaitez.
          </p>
          <button  style={{ backgroundColor: '#FFB6C1' }}
              className="text-dark-blue px-4 py-2 rounded-full  hover:bg-pink-300 font-bold">
         Trouver un thérapeute
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;