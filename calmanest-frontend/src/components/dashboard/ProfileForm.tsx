import React, { useState, useEffect } from 'react';
import { fetchInstance } from '@/utils/fetchInstance';

interface ProfileFormProps {
  userId: number;
  onClose: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ userId, onClose }) => {
  const initialProfileState = {
    qualifications: [''],
    experience: [''],
    profilePicture: '',
    bio: '',
  };

  const [profile, setProfile] = useState(initialProfileState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchInstance(`/profile/${userId}`);
     
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
        setError('Erreur lors de la récupération du profil');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value } = e.target;
    if (index !== undefined && (name === 'qualifications' || name === 'experience')) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: prevProfile[name].map((item, i) => (i === index ? value : item)),
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleAddField = (field: 'qualifications' | 'experience') => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: [...prevProfile[field], ''],
    }));
  };

  const handleRemoveField = (field: 'qualifications' | 'experience', index: number) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: prevProfile[field].filter((_, i) => i !== index),
    }));
  };

  const resetForm = () => {
    setProfile(initialProfileState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchInstance(`/profile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      alert('Profil mis à jour avec succès');
      resetForm(); 
      onClose();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Qualifications</label>
        {profile.qualifications.map((qualification, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              name="qualifications"
              value={qualification}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            <button
              type="button"
              onClick={() => handleRemoveField('qualifications', index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField('qualifications')}
          className="text-blue-500"
        >
          Add Qualification
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Expérience</label>
        {profile.experience.map((exp, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              name="experience"
              value={exp}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            <button
              type="button"
              onClick={() => handleRemoveField('experience', index)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField('experience')}
          className="text-blue-500"
        >
          Add Experience
        </button>
      </div>
       
      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;