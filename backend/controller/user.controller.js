import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const signup=async (req,res)=>{
    try {
        const {fullname,email,password}=req.body
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"})
            }
        const hashedPassword=await bcryptjs.hash(password,10);
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashedPassword
        });
        createdUser.save()
        res.status(200).json({message:"user registered successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
            }})
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

export const login=async (req,res)=>{
    try {
        const {email,password}=req.body
        const user= await User.findOne({email})
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid credentials"})
            }
            res.status(200).json({message:"logged in successfully",user:{
                __id:user._id,
                fullname:user.fullname,
                email:user.email
            }})

    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}