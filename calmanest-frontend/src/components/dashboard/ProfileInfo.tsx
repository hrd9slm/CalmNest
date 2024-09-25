import React, { useState, useEffect } from 'react';
import { fetchInstance } from '@/utils/fetchInstance';

interface ProfileInfoProps {
  userId: number;
}

interface ProfileData {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthDate: string;
    role: string;
  };
  qualifications: string[];
  experience: string[];
  profilePicture?: string;
  bio?: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ userId }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchInstance(`/profile/${userId}`);
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
        setError('Erreur lors de la récupération du profil');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!profile) {
    return <div className="text-red-500">Profil non trouvé.</div>;
  }

  return (
    <div className="bg-blue-100 shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <div className="mb-2">
        <strong>Name:</strong> {profile.user.firstName} {profile.user.lastName}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {profile.user.email}
      </div>
      <div className="mb-2">
        <strong>Gender:</strong> {profile.user.gender}
      </div>
      <div className="mb-2">
        <strong>Birth Date:</strong> {new Date(profile.user.birthDate).toLocaleDateString()}
      </div>
     
      {profile.bio && (
        <div className="mb-2">
          <strong>Bio:</strong> {profile.bio}
        </div>
      )}
      <div className="mb-2">
        <strong>Qualifications:</strong> {profile.qualifications.join(', ')}
      </div>
      <div className="mb-2">
        <strong>Experience:</strong> {profile.experience.join(', ')}
      </div>
      
    </div>
  );
};

export default ProfileInfo;