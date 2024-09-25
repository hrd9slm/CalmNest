import express from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } from '../controllers/articleController';
import upload from '../middlewares/uploadMiddleware';

const articleRouter = express.Router();


articleRouter.post('/articles', upload.single('image'), createArticle);


articleRouter.get('/articles', getAllArticles);

articleRouter.get('/articles/:id', getArticleById);


articleRouter.put('/articles/:id', upload.single('image'), updateArticle);


articleRouter.delete('/articles/:id', deleteArticle);

export default articleRouter;