import User from '../models/usersModel.js';
import { createSecretToken } from '../util/secretToken.js';
import bcrypt from 'bcrypt';

export const Signup = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email, password, primaryLanguage, isAdmin } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ firstName, lastName, userName, email, password, primaryLanguage, isAdmin });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

export const Login = async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      if(!userName || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ userName });
      if(!user){
        return res.json({message:'Incorrect password or username' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or username' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }