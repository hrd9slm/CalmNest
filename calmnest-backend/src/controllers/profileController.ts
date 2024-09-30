import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { getIdFromToken } from '../utils/jwt';


const prisma = new PrismaClient();


async function getProfile(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required.' });
  }

  const userId = getIdFromToken(token);

  if (!userId) {
    return res.status(401).json({ message: 'Invalid token.' });
  }

  try {
 
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
      return res.status(404).json({ message: 'Profile not found.' });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error retrieving profile.' });
  }
}


async function updateProfile(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required.' });
  }

  const userId = getIdFromToken(token);

  if (!userId) {
    return res.status(401).json({ message: 'Invalid token.' });
  }

  const { qualifications, experience, profilePicture, bio } = req.body;

  try {
    const existingProfile = await prisma.profile.findUnique({
      where: { userId: Number(userId) },
    });

    if (!existingProfile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

  
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
    return res.status(500).json({ message: 'Error updating profile.' });
  }
}

export { getProfile, updateProfile };