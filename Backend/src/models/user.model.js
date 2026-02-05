import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    profile: {
        type: String
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},{
    timestamps: true
})

userSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
})

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
        _id: this._id,
        email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}


export const userModel = mongoose.model("User", userSchema);