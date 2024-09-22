import  express  from "express";
import authrouter from "./authRoutes";
const routes = express.Router();

routes.use(authrouter);


export default routes;