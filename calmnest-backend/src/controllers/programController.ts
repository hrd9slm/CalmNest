import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';
import { getIdFromToken } from '../utils/jwt';

const prisma = new PrismaClient();


export const createProgram = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  const userId = getIdFromToken(token);

  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  try {
    const program = await prisma.program.create({
      data: {
        title,
        description,
        creationDate: new Date(),
        user: { connect: { id: userId } },
      },
    });

    res.status(201).json(program);
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllPrograms = async (req: Request, res: Response) => {
  try {
    const programs = await prisma.program.findMany({
      include: { unitLearnings: true, user: true },
    });
    res.status(200).json(programs);
  } catch (error) {
    console.error('Error fetching programs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const uploadVideoToCloudinary = (fileBuffer: Buffer): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'video', folder: 'unitLearnings' },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    uploadStream.end(fileBuffer);
  });
};

export const createUnitLearning = async (req: Request, res: Response) => {
  const { title, description, programId } = req.body;
  const videoFile = req.file;
  const token = req.headers.authorization?.split(' ')[1];

  if (!videoFile) {
    return res.status(400).json({ error: 'Video file is required' });
  }
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  const userId = getIdFromToken(token);

  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  try {
    const uploadResult = await uploadVideoToCloudinary(videoFile.buffer);

    const unitLearning = await prisma.unitLearning.create({
      data: {
        title,
        description,
        videoUrl: uploadResult.secure_url,
        user: { connect: { id: userId } },
        program: parseInt(programId) ? { connect: { id: parseInt(programId) } } : undefined,
      },
    });

    res.status(201).json(unitLearning);
  } catch (error) {
    console.error('Error creating unit learning:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getAllUnitLearnings = async (req: Request, res: Response) => {
  try {
    const unitLearnings = await prisma.unitLearning.findMany({
      include: { user: true, program: true },
    });
    res.status(200).json(unitLearnings);
  } catch (error) {
    console.error('Error fetching unit learnings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};