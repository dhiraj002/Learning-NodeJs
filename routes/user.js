import express from "express";

import { createNewUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",createNewUser );

export default router;
