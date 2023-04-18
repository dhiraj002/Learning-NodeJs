import express from "express";

import {
  getAllUsers,
  getUserById,
  login,
  register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

router.route("/userid/:id").get(getUserById);

export default router;
