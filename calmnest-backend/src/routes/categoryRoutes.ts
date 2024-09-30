import express from 'express';
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController';
import {upload} from '../middlewares/uploadMiddleware';
import authenticateUser from "../middlewares/AuthMiddleware";
import { IsAdmin } from "../middlewares/IsAdminMiddleware";


const categoryRouter = express.Router();


categoryRouter.post('/categories', authenticateUser,IsAdmin, upload.single('image'), createCategory);


categoryRouter.get('/categories', authenticateUser,IsAdmin, getAllCategories);

categoryRouter.get('/categories/:id', authenticateUser,IsAdmin, getCategoryById);


categoryRouter.put('/categories/:id', authenticateUser,IsAdmin, upload.single('image'), updateCategory);


categoryRouter.delete('/categories/:id', authenticateUser,IsAdmin, deleteCategory);

export default categoryRouter;