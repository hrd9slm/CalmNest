import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import authenticateUser from "../middlewares/AuthMiddleware";
const profilRouter = express.Router();

profilRouter.get('/profile',authenticateUser, getProfile);
profilRouter.put('/profile',authenticateUser, updateProfile);

export default profilRouter;