import React from 'react';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-pink-50">
      <header className="bg-dark-blue text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Bienvenue sur notre plateforme de méditation</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="flex flex-col md:flex-row justify-around items-center py-10 bg-light-green rounded-lg shadow-md mb-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-dark-blue mb-4">Découvrez les bienfaits de la méditation</h2>
            <p className="text-dark-blue">
              La méditation peut vous aider à trouver la paix, la clarté et le bien-être. Rejoignez-nous pour explorer comment la pleine conscience peut transformer votre vie.
            </p>
          </div>
          <div className="md:w-1/3 p-4">
            <img src="/images/meditation.png" alt="Méditation" className="w-full h-auto" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-around items-center py-10 bg-light-yellow rounded-lg shadow-md mb-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-dark-blue mb-4">Inscrivez-vous pour commencer</h2>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-dark-blue focus:border-dark-blue" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-dark-blue focus:border-dark-blue" />
              </div>
              <button type="submit" className="w-full bg-md-yellow text-dark-blue font-semibold py-2 px-4 rounded-md hover:bg-dark-blue hover:text-white transition duration-300">
                S'inscrire
              </button>
            </form>
          </div>
          <div className="md:w-1/3 p-4">
            <img src="/images/signup.png" alt="Inscription" className="w-full h-auto" />
          </div>
        </section>
      </main>

      <footer className="bg-dark-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Plateforme de Méditation. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoPage;