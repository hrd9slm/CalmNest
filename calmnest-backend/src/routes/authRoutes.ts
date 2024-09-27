import { Router } from "express";
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/authController";
import authenticateUser from "../middlewares/AuthMiddleware";
import { IsAdmin } from "../middlewares/IsAdminMiddleware";

const authRouter = Router();

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.get("/getAllUsers", authenticateUser,IsAdmin,getAllUsers);

authRouter.get("/user/:id", authenticateUser,IsAdmin, getUserById);
authRouter.put("/user/:id", authenticateUser,IsAdmin, updateUser);
authRouter.delete("/user/:id", authenticateUser, IsAdmin,deleteUser);



export default authRouter;
