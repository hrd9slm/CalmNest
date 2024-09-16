'use client'
import React, { useState } from 'react';

interface AdmissionFormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  motivation: string;
  cv: File | null;
}

const TherapeuteForm: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    motivation: '',
    cv: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        cv: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement des données du formulaire
    console.log('Form Data Submitted:', formData);
    // Vous pouvez envoyer les données à un serveur ici
  };

  return (
   
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#00053f]">Demande d'Admission</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Nom"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Prénom"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Numéro de Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Ville"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Pays"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
          </div>
          <textarea
            name="motivation"
            placeholder="Motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
            required
          />
          <div>
            <input
              type="file"
              name="cv"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6ba271]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-full font-bold text-white border-2 border-light-pink bg-light-pink transition-all ease-in-out duration-300 hover:bg-transparent hover:text-light-pink"
          >
            Soumettre
          </button>
        </form>
      </div>
   
  );
};

export default TherapeuteForm;