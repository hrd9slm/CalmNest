// authRoutes.ts
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

authRouter.get("/", getAllUsers);

authRouter.get("/:id", getUserById);

authRouter.put("/:id", updateUser);

authRouter.delete("/:id", deleteUser);

export default authRouter;
