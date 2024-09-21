import React from 'react';

const Hero: React.FC = () => {

  return (
    <div className="bg-blue-50 py-10 pb-32">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Bienvenue sur CalmNest
            </h1>
            <p className="text-gray-600 mb-6">
              Plongez dans CalmNest, votre partenaire pour un bien-être mental et émotionnel optimal. Face au stress et à l'anxiété, CalmNest vous offre un havre de paix et de soutien. Accédez à des outils de journalisation quotidienne, suivez vos progrès avec des tableaux de bord personnalisés, et connectez-vous à des groupes de soutien thématiques. Grâce à une interface intuitive, CalmNest rend votre parcours de bien-être simple et gratifiant. Rejoignez-nous pour reprendre le contrôle de votre santé mentale dès maintenant.
            </p>
            <button
            
              className="text-dark-blue px-4 py-2 rounded-full bg-light-pink hover:bg-pink-300 font-bold"
            >
              Commencez votre voyage
            </button>
            
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-32">
            <img
              src="/images/hero1.jpg"
              alt="Calm and serene landscape"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;