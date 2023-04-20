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

export const updateTask = async (req, res,next) => {
  const { id } = req.params;
  // console.log(id);

  const task = await Task.findById(id);
  // console.log(tasks);

  if (!task)
    return next(new Error("invalid id"));

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({
    success: true,
    message: "Task Updated",
  });
};

export const deleteTask = async (req, res,next) => {
  const { id } = req.params;
  // console.log(id);
  const task = await Task.findById(id);
  // console.log(task);

  if (!task)
    return next(new Error("invalid id"));

  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted",
  });
};
