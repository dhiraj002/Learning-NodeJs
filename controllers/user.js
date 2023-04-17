import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  const keyword = req.query.keyword;
  console.log(keyword);

  res.status(201).json({
    success: true,
    users,
  });
};

export const createNewUser = async (req, res) => {
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
};

export const getUserById= async(req,res)=>{

  const id = req.params.id;
  const user = await User.findById(id);

  res.json({
    success:true,
    user
  })
}

export const updateUser=async(req,res)=>{
  const id=req.params.id;
  const user=await User.findById(id);
  console.log(user);
  res.json({
    success:true,
    message:"user Updated",
  })
}

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  console.log(user);

  res.json({
    success: true,
    message: "user deleted",
  });
};


