import express from 'express';
import { createProgram, getAllPrograms, createUnitLearning, getAllUnitLearnings } from '../controllers/programController';
import {uploadVideos} from '../middlewares/uploadMiddleware';
import authenticateUser from "../middlewares/AuthMiddleware";
import  {isTherapist}  from "../middlewares/therapistMiddleware";

const programRouter = express.Router();

programRouter.post('/programs', authenticateUser,isTherapist,createProgram);
programRouter.get('/programs', getAllPrograms);
programRouter.post('/unitLearnings',authenticateUser,isTherapist,uploadVideos.single('video'), createUnitLearning);
programRouter.get('/unitLearnings', getAllUnitLearnings);

export default programRouter;