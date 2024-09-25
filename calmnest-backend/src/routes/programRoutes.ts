// programUnitLearningRoutes.ts

import express from 'express';
import { createProgram, getAllPrograms, createUnitLearning, getAllUnitLearnings } from '../controllers/programController';
import upload from '../middlewares/uploadMiddleware';

const programRouter = express.Router();

programRouter.post('/programs', createProgram);
programRouter.get('/programs', getAllPrograms);
programRouter.post('/unitLearnings', upload.single('video'), createUnitLearning);
programRouter.get('/unitLearnings', getAllUnitLearnings);

export default programRouter;