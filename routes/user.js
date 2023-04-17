import express from "express";

import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", createNewUser);

router.route("/userid/:id").put(updateUser).delete(deleteUser).get(getUserById);

export default router;
