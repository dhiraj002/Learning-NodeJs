import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User already Exist",
    });
  }

  const hashedPasssword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPasssword });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 20 * 1000,
    })
    .json({
      success: true,
      message: "User REgisteration Successful",
    });
};

export const login = async (req, res) => {};

export const getUserById = async (req, res) => {};
