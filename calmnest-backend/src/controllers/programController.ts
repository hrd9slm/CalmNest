// programUnitLearningController.ts

import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Create a new program
export const createProgram = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body;

  try {
    const program = await prisma.program.create({
      data: {
        title,
        description,
        creationDate: new Date(),
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });

    res.status(201).json(program);
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all programs
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

// Create a new unit learning
export const createUnitLearning = async (req: Request, res: Response) => {
  const { title, description, userId, programId } = req.body;
  const videoFile = req.file; 

  if (!videoFile) {
    return res.status(400).json({ error: 'Video file is required' });
  }

  try {
   
    const uploadResult = await cloudinary.uploader.upload(videoFile.path, {
      resource_type: 'video',
      folder: 'unitLearnings',
    });

 
    const unitLearning = await prisma.unitLearning.create({
      data: {
        title,
        description,
        videoUrl: uploadResult.secure_url,
        user: userId ? { connect: { id: userId } } : undefined,
        program: programId ? { connect: { id: programId } } : undefined,
      },
    });

    res.status(201).json(unitLearning);
  } catch (error) {
    console.error('Error creating unit learning:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all unit learnings
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