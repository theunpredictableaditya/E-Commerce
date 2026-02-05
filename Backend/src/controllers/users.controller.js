import { userModel } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req, res)=>{

    //Get the user registration details
    const {fullName, username, email, password} = req.body;

    if([fullName, username, email, password].some((field)=> field?.trim() === "")){
        throw new apiError(400, "All fields are required.")
    }
    
    //check that the user already exists or not
    const existedUser = await userModel.findOne({
        $or: [{email}, {username}]
    })

    if(existedUser){
        throw new apiError(409, "User With This Email Or Username Already Exists");
    }

    const user = await userModel.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password
    })

    const createdUser = await userModel.findById(user._id).select("-password");

    if(!createdUser){
        throw new apiError(500, "Error Ocuured While Registering User");
    }

    res
    .status(200)
    .json(new apiResponse(200, createdUser, "User Registered Successfully \n Please LogIn Using Your Credentials"));
})

const loginUser = asyncHandler(async(req, res)=>{
    const {username, email, password} = req.body;

    if(!password.trim()){
        throw new apiError(401, "Invalid Credentials!!")
    }

    if(!username && !email){
        throw new apiError(401, "Either Email Or Username Is Required!!");
    }

    const user = await userModel.findOne(
        {
            $or: [{email}, {username}]
        }
    )

    if(!user){
        throw new apiError(409, "User Doesnot Exists!!");
    }

    //password validation
    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new apiError(400, "Invalid Credentials!!!");
    }

    //accessToken generation
    const accessToken = user.generateAccessToken();

    //sending cookie as response
    res.status(200)
    .cookie("accessToken", accessToken)
    .json(new apiResponse(200, user, "User Logged In Successfully"));

})

const logoutUser = asyncHandler(async(req, res)=>{
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .json(new apiResponse(200, "User Logged Out Successfully"));
})

export {
    registerUser,
    loginUser,
    logoutUser
}