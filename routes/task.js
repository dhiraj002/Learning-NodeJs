import express from "express";
import { isAuthenticated } from "../utils/auth.js";
import { addNewTask, getMyTask } from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, addNewTask);

router.get("/mytask", isAuthenticated, getMyTask)

export default router;