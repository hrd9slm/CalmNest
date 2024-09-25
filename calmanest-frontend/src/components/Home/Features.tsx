import React from 'react';

const Features: React.FC = () => {
  const featuresList = [
    {
      title: 'Daily Journaling',
      description: 'Track your thoughts and emotions with our easy-to-use journaling tool.',
      icon: '', 
    },
    {
      title: 'Personalized Dashboards',
      description: 'Monitor your progress with customizable dashboards tailored to your needs.',
      icon: '',
    },
    {
      title: 'Support Groups',
      description: 'Connect with others in themed support groups for shared experiences.',
      icon: '',
    },
    {
      title: 'Intuitive Interface',
      description: 'Enjoy a seamless experience with our user-friendly interface.',
      icon: '',
    },
  ];

  return (
    <section id="feature" className="py-8 bg-light-green ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-dark-blue mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={feature.icon} alt={`${feature.title} icon`} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;