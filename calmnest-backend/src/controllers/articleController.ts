import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Create a new article
export const createArticle = async (req: Request, res: Response) => {
  const { title, content, userId } = req.body;
  const imageFile = req.file; // Assuming you're using a middleware like multer for file uploads

  if (!imageFile) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  try {
    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
      folder: 'articles',
    });

    // Create article in the database
    const article = await prisma.article.create({
      data: {
        title,
        content,
        image: uploadResult.secure_url,
        creationDate: new Date(),
        user: { connect: { id: userId } },
      },
    });

    res.status(201).json(article);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all articles
export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany({
      include: { user: true },
    });
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single article by ID
export const getArticleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
      include: { user: true },
    });

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an article
export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const imageFile = req.file;

  try {
    let imageUrl: string | undefined;

    if (imageFile) {
      // Upload new image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
        folder: 'articles',
      });
      imageUrl = uploadResult.secure_url;
    }

    const article = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
        ...(imageUrl && { image: imageUrl }),
      },
    });

    res.status(200).json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an article
export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.article.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};