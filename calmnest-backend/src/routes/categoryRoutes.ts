// categoryRoutes.ts

import express from 'express';
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/categoryController';
import upload from '../middlewares/uploadMiddleware';

const categoryRouter = express.Router();


categoryRouter.post('/categories', upload.single('image'), createCategory);


categoryRouter.get('/categories', getAllCategories);

categoryRouter.get('/categories/:id', getCategoryById);


categoryRouter.put('/categories/:id', upload.single('image'), updateCategory);


categoryRouter.delete('/categories/:id', deleteCategory);

export default categoryRouter;