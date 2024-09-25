import React, { useState, ChangeEvent, FormEvent } from 'react';


interface MeditationData {
  title: string;
  category: string;
  duration: number;
  videoUrl?: string;
  pdfUrl?: string;
  description: string;
  themePack?: string;
  userId: number;
}


interface ProgramData {
  title: string;
  description: string;
  price: number;
}

function MeditationAndProgramForm() {
 
  const [meditationData, setMeditationData] = useState<MeditationData>({
    title: '',
    category: '',
    duration: 0,
    videoUrl: '',
    pdfUrl: '',
    description: '',
    themePack: '',
    userId: 0,
  });

  // État pour le formulaire de programme
  const [programData, setProgramData] = useState<ProgramData>({
    title: '',
    description: '',
    price: 0.0,
  });


  const handleMeditationChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMeditationData({
      ...meditationData,
      [name]: name === 'duration' || name === 'userId' ? Number(value) : value,
    });
  };


  const handleProgramChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProgramData({
      ...programData,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  const handleMeditationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Meditation data submitted:', meditationData);

  };

 
  const handleProgramSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Program data submitted:', programData);
    
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleMeditationSubmit} className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Create Meditation</h2>
        <div>
          <label htmlFor="meditationTitle" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="meditationTitle"
            value={meditationData.title}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="meditationCategory" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            id="meditationCategory"
            value={meditationData.category}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a category</option>
            <option value="Mindfulness">Mindfulness</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Focus">Focus</option>
       
          </select>
        </div>
        <div>
          <label htmlFor="meditationDuration" className="block text-sm font-medium text-gray-700">
            Duration (minutes)
          </label>
          <input
            type="number"
            name="duration"
            id="meditationDuration"
            value={meditationData.duration}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="meditationVideoUrl" className="block text-sm font-medium text-gray-700">
            Video URL
          </label>
          <input
            type="url"
            name="videoUrl"
            id="meditationVideoUrl"
            value={meditationData.videoUrl}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="meditationPdfUrl" className="block text-sm font-medium text-gray-700">
            PDF URL
          </label>
          <input
            type="url"
            name="pdfUrl"
            id="meditationPdfUrl"
            value={meditationData.pdfUrl}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="meditationDescription" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="meditationDescription"
            value={meditationData.description}
            onChange={handleMeditationChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Create Meditation
        </button>
      </form>

      <form onSubmit={handleProgramSubmit} className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Create Program</h2>
        <div>
          <label htmlFor="programTitle" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="programTitle"
            value={programData.title}
            onChange={handleProgramChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="programDescription" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="programDescription"
            value={programData.description}
            onChange={handleProgramChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="programPrice" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="programPrice"
            value={programData.price}
            onChange={handleProgramChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            step="0.01"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        >
          Create Program
        </button>
      </form>
    </div>
  );
}

export default MeditationAndProgramForm;