import { Request, Response, NextFunction } from 'express';
interface adminRequest  extends Request{
    user?: {
      id: string;
      email: string;
      isAdmin: boolean;
    };}

export const IsAdmin = (req: adminRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next(); 
  } else {
    return res.sendStatus(403); 
  }
};