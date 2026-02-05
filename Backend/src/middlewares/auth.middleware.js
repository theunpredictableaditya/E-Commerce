import { userModel } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async(req, res, next)=>{
    try {
        const token = req.cookies?.accessToken;

        if(!token){
            throw new apiError(400, "Can't Logout, Unauthorized Request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await userModel.findById(decodedToken?._id).select("-password");

        if(!user){
            throw new apiError(409, "Bad Request While Verifying User Token!!!");
        }

        req.user = user;

        next();
    } catch (error) {
        throw new apiError(401, error?.message || "Invalid Authorization!!!");
    }
})

export {
    verifyJWT
}