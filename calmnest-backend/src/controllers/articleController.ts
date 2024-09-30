import { PrismaClient } from '@prisma/client';
import cloudinary from '../../cloudinaryConfig';
import { Request, Response } from 'express';
import { getIdFromToken } from '../utils/jwt';

const prisma = new PrismaClient();

// Helper function to upload image to Cloudinary using buffer
const uploadImageToCloudinary = (fileBuffer: Buffer): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'articles' },
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

// Create a new article
export const createArticle = async (req: Request, res: Response) => {
  const { title, content } = req.body;
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


export const updateArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const imageFile = req.file;

  try {
    let imageUrl: string | undefined;

    if (imageFile) {
   
      const uploadResult = await uploadImageToCloudinary(imageFile.buffer);
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