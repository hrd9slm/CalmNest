import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';
import { getIdFromToken } from '../utils/jwt';

const prisma = new PrismaClient();


const uploadImageToCloudinary = (fileBuffer: Buffer): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'categories' },
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


export const createCategory = async (req: Request, res: Response) => {
  const { title } = req.body;
  const imageFile = req.file;
  const token = req.headers.authorization?.split(' ')[1];

  if (!imageFile) {
    return res.status(400).json({ error: 'Image file is required' });
  }
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }
  const userId = getIdFromToken(token);
 
  if (!userId) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  try {
    const uploadResult = await uploadImageToCloudinary(imageFile.buffer);

    const category = await prisma.category.create({
      data: {
        title,
        imageUrl: uploadResult.secure_url,
        user: { connect: { id: userId } },
      },
    });

    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: { user: true },
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: { user: true },
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  const imageFile = req.file;

  try {
    let imageUrl: string | undefined;

    if (imageFile) {
      const uploadResult = await uploadImageToCloudinary(imageFile.buffer);
      imageUrl = uploadResult.secure_url;
    }

    const category = await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        title,
        ...(imageUrl && { imageUrl }),
      },
    });

    res.status(200).json(category);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};