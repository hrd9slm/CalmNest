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

const authrouter = Router();

authrouter.post("/register", register);

authrouter.post("/login", login);

authrouter.get("/", getAllUsers);

// (accessible uniquement aux admins)
authrouter.get("/:id", getUserById);

authrouter.put("/:id", updateUser);

authrouter.delete("/:id", deleteUser);

export default authrouter;
