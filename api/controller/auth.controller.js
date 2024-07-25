// entering the data in datbase 

import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs'
//import { errorHandler } from '../utils/error.js';
export const signup=async(req,res,next)=>{

  const {username,email,password}=req.body;
  const hashesPassword=bcryptjs.hashSync(password,10);
  const newUser=new User({username,email,password:hashesPassword});
  try{
    await newUser.save();
    res.status(201).json("user created succesfully!!!")
  
  }catch(error)
  {
    next(error);  //this is the error given by the server 
    // next(errorHandler(550,'error from function')); // this the error created by the function for ex if password is not valid then we can genrate this error
  }
 
};