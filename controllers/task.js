import { Task } from "../models/task.js";

export const addNewTask = async (req, res) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Task added Successfully",
  });
};

export const getMyTask = async (req, res) => {
  const userId = req.user._id;

  const tasks = await Task.find({ user: userId });

  res.status(200).json({
    success: true,
    tasks,
  });
};
