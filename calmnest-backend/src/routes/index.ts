// routes/index.ts

import express from 'express';
import articleRouter from './articleRoutes';
import categoryRouter from './categoryRoutes';
import programRouter from './programRoutes';
import authRouter from './authRoutes';
import profilRouter from './profileRoutes';


const routes = express.Router();



routes.use(authRouter);
routes.use(programRouter);
routes.use(categoryRouter);
routes.use(articleRouter);
routes.use(profilRouter);

export default routes;