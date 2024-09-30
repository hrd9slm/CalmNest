import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

export const isTherapist = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user || !req.user.id) {
    return res.sendStatus(401); 
  }

  try {

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true },
    });

    if (user && user.role === 'therapist') {
      next();
    } else {
      return res.sendStatus(403); 
    }
  } catch (error) {
    console.error('Error checking user role:', error);
    return res.sendStatus(500); 
  }
};