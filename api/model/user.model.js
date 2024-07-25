import mongoose from "mongoose";
/// creation of schemma
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    }
},
    {timestamps:true});
/// creation of model
 const User=mongoose.model('User',userSchema)

 export default User;