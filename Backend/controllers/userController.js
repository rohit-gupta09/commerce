import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
// import { Jwt } from 'jsonwebtoken'
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const { sign, verify } = jwt;

    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
       generateToken(res,user._id)
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(res, user._id),
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @ Register a new user
// @route POST/api/users
// 
const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already exist')
    }
    const user= await User.create({
        name,
        email,
        password
    })

    if(user){
        const token = generateToken(res,user._id)
        console.log(token)
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(res, user._id),
            
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})
// deleter user
const deleteUserProfile = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})

// logout user
const logoutUserProfile = asyncHandler(async(req,res)=>{
   res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
   });
   res.status(200).json({message:'logged out successfully'})
})




// update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.status(200).json({
            _id:updatedUser._id,
            name: updatedUser.name,
            email:updatedUser.email,
            isAdmin:updatedUser.isAdmin,
            // token:generateToken(updatedUser._id),
        })

    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})

// users
const getusers = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})

// private user
const getUserByID = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})
// update user
const updateuser = asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User Not found')
    }
})





export {authUser,logoutUserProfile,getusers,deleteUserProfile,registerUser,getUserProfile,updateUserProfile,getUserByID,updateuser}