// profileRoutes.ts
import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';

const profilRouter = express.Router();

profilRouter.get('/profile/:userId', getProfile);
profilRouter.put('/profile/:userId', updateProfile);

export default profilRouter;