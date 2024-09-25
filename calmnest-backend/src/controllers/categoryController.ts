import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const imageFile = req.file; 

  if (!imageFile) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  try {
  
    const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
      folder: 'categories',
    });


    const category = await prisma.category.create({
      data: {
        title,
        imageUrl: uploadResult.secure_url,
        user: userId ? { connect: { id: userId } } : undefined,
      },
    });

    res.status(201).json(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all categories
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

// Get a single category by ID
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

// Update a category
export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  const imageFile = req.file;

  try {
    let imageUrl: string | undefined;

    if (imageFile) {
   
      const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
        folder: 'categories',
      });
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

// Delete a category
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