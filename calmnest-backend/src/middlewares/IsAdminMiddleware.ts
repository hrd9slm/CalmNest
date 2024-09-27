import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
interface adminRequest  extends Request{
    user?: {
      id: string;
      email: string;
   
    };}

export const IsAdmin = async(req: adminRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.sendStatus(403); 
  }

  try {
  
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.user.id), 
        email: req.user.email,
      },
    });

    
    if (user && user.role === 'admin') {
      next(); 
    } else {
    return res.sendStatus(403); 
  }
} catch (error) {
  console.error('Error checking admin role:', error);
  return res.status(500).json({ message: 'Internal server error' });
}
};