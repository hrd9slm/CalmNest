import React from 'react';

function Page() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-around items-center text-center md:text-left py-10 bg-blue-50">
        <div className="md:w-1/2 md:pr-8 m-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">Méditations & Pleine conscience</h1>
          <p className="text-lg text-blue-800">
            Découvrez comment la méditation et la pleine conscience peuvent transformer votre vie en vous apportant calme, clarté et bien-être.
          </p>
        </div>
        <div className="md:w-1/4 md:pl-8 mt-6 md:mt-0 sm:w-1/5">
          <img src="/images/medi1.png" alt="Meditation" className="w-full h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around items-center text-center md:text-left py-10 bg-light-pink-50">
        <div className="md:w-1/2 md:pl-8 m-4">
          <h2 className="text-3xl font-semibold mb-4 text-pink-900">Qu'est-ce que la méditation ?</h2>
          <p className="text-pink-800 mb-4">
            La méditation est une pratique ancienne qui consiste à entraîner l'esprit à se concentrer et à rediriger ses pensées. Elle est utilisée pour augmenter la conscience de soi et de l'environnement, réduire le stress et développer la concentration.
          </p>
          <p className="text-pink-800">
            La pleine conscience, quant à elle, est la capacité de rester présent et pleinement engagé dans le moment présent, sans jugement. Ensemble, ces pratiques peuvent améliorer votre bien-être mental et physique.
          </p>
        </div>
        <div className="md:w-1/4 md:pr-8 mt-6 md:mt-0 sm:w-1/5">
          <img src="/images/medi2.png" alt="Mindfulness" className="w-full h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-center  md:text-left py-10 bg-light-green">
        <div className="md:w-1/2 md:pr-8 m-4">
          <h2 className="text-3xl font-semibold mb-4 text-green-900">Les bienfaits de la méditation</h2>
          <ul className="list-disc list-inside text-green-800">
            <li>Réduction du stress et de l'anxiété</li>
            <li>Amélioration de la concentration et de l'attention</li>
            <li>Augmentation de la conscience de soi</li>
            <li>Amélioration du bien-être émotionnel</li>
            <li>Promotion d'un mode de vie sain</li>
          </ul>
        </div>
        <div className="md:w-1/4 md:pl-8 mt-6 md:mt-0 sm:w-1/5">
          <img src="/images/medi3.png" alt="Benefits of Meditation" className="w-full h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around items-center text-center md:text-left py-10 bg-light-yellow">
        <div className="md:w-1/2 md:pl-8 m-4">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-900">Comment commencer ?</h2>
          <p className="text-yellow-800 mb-4">
            Commencer la méditation est simple. Trouvez un endroit calme, asseyez-vous confortablement, et concentrez-vous sur votre respiration. Commencez par quelques minutes par jour et augmentez progressivement la durée.
          </p>
          <p className="text-yellow-800">
            Il existe de nombreuses applications et ressources en ligne pour vous guider dans votre pratique, telles que des méditations guidées et des exercices de pleine conscience.
          </p>
        </div>
        <div className="md:w-1/4 md:pr-8 mt-6 md:mt-0 sm:w-1/5">
          <img src="/images/medi4.png" alt="Start Meditation" className="w-full h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-center text-center md:text-left py-10 bg-blue-50">
        <div className="md:w-1/2 md:pr-8 m-4">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">Prêt à transformer votre vie ?</h2>
          <p className="text-blue-800 mb-4">
            Rejoignez des millions de personnes qui ont découvert les bienfaits de la méditation et de la pleine conscience. Commencez votre voyage vers un esprit plus calme et une vie plus épanouie dès aujourd'hui.
          </p>
          <button className="bg-dark-blue text-white font-semibold py-3 px-8 rounded-full text-sm hover:bg-md-yellow md:mt-2 transition duration-300">
            Commencez maintenant
          </button>
        </div>
        <div className="md:w-1/4 md:pl-8 mt-6 md:mt-0 sm:w-1/5">
          <img src="/images/medi5.png" alt="Transform Your Life" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
}

export default Page;