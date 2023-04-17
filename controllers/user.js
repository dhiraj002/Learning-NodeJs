import { User } from "../models/user.js";

export const getAllUsers=async (req, res) => {
    const users = await User.find({});
  
    const keyword = req.query.keyword;
    console.log(keyword);
  
    res.status(201).json({
      success: true,
      users,
    });
  }

  export const createNewUser=async (req, res) => {
    const { name, email, password } = req.body;
  
    await User.create({
      name,
      email,
      password,
    });
  
    res.status(201).json({
      success: true,
      message: "Registered successfully",
    });
  }