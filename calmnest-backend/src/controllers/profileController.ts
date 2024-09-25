// profileController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fonction pour récupérer un profil avec les informations de l'utilisateur
async function getProfile(req: Request, res: Response) {
  const { userId } = req.params;

  try {
    // Récupérer le profil avec les informations de l'utilisateur
    const profile = await prisma.profile.findUnique({
      where: { userId: Number(userId) },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            gender: true,
            birthDate: true,
            role: true,
          },
        },
      },
    });

    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouvé.' });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la récupération du profil.' });
  }
}

// Fonction pour mettre à jour un profil
async function updateProfile(req: Request, res: Response) {
  const { userId } = req.params;
  const { qualifications, experience, profilePicture, bio } = req.body;

  try {
    // Vérifier si le profil existe
    const existingProfile = await prisma.profile.findUnique({
      where: { userId: Number(userId) },
    });

    if (!existingProfile) {
      return res.status(404).json({ message: 'Profil non trouvé.' });
    }

    // Mettre à jour le profil
    const updatedProfile = await prisma.profile.update({
      where: { userId: Number(userId) },
      data: {
        qualifications: qualifications || existingProfile.qualifications,
        experience: experience || existingProfile.experience,
        profilePicture: profilePicture || existingProfile.profilePicture,
        bio: bio || existingProfile.bio,
      },
    });

    return res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors de la mise à jour du profil.' });
  }
}


export { getProfile, updateProfile };