import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";


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

  sendCookie(user,res,201,"User Registered Succesfully")

};

export const login = async (req, res) => {

    const {email,password}=req.body;

    let user= await User.findOne({email}).select("+password");

    if (!user) {
        return res.status(404).json({
          success: false,
          message: "Invalid Email or password",
        });
      }
      
      const isMatch=await bcrypt.compare(password,user.password);

      if(!isMatch){
        return res.status(404).json({
            success: false,
            message: "Invalid Email or password",
          });
      }

      sendCookie(user,res,200,"Welcome back",`${user.name}`)



};

export const getMyProfile = (req, res) => {

    res.status(200).json({
        success:true,
        user:req.user,
    })

};


export const logout = (req, res) => {

    res.status(200).cookie("token"," ",{
        expires:new Date(Date.now())
    }).json({
        success:true,
       message:req.user
    })

};