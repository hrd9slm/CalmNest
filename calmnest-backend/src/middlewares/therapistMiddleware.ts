import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string; 
  };
}

export const isTherapist = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'therapist') {
    next(); 
  } else {
    return res.sendStatus(403); 
  }
};