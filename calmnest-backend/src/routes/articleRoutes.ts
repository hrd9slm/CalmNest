import express from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } from '../controllers/articleController';
import {upload} from '../middlewares/uploadMiddleware';
import authenticateUser from "../middlewares/AuthMiddleware";
import  {isTherapist}  from "../middlewares/therapistMiddleware";

const articleRouter = express.Router();


articleRouter.post('/article',authenticateUser,isTherapist,upload.single('image'), createArticle);


articleRouter.get('/articles', getAllArticles);

articleRouter.get('/article/:id', getArticleById);


articleRouter.put('/article/:id',authenticateUser,isTherapist, upload.single('image'), updateArticle);


articleRouter.delete('/article/:id',authenticateUser,isTherapist, deleteArticle);

export default articleRouter;