import { cartModel } from "../models/cart.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"

const addToCart = asyncHandler(async(req, res)=> {
    const productId = req.query.productId;
    const quantity = parseInt(req.query.quantity);
    const user = req.user;
    // console.log(productId, user)
    if(!user){
        throw new apiError(404, "Bad Request");
    }

    const doesCartExist = await cartModel.findOne({user: user._id});
    if(doesCartExist){
        console.log("Yes", doesCartExist)
        doesCartExist.items.push({
            product: productId,
            quantity: quantity
        });
        await doesCartExist.save();
        res.status(200)
        .json(new apiResponse(200, doesCartExist, "Successfully Saved To Cart"));
    }else{
        console.log("No")
        // const items = [productId];
        const createCart = await cartModel.create({
            user: user._id,
            items: {
            product: productId,
            quantity: quantity
        }
        })
        if(!createCart){
            throw new apiError(401, "Unable To Create A Cart");
        }
        res.status(200)
        .json(new apiResponse(200, createCart, "Successfully Saved To Cart"));
    }
})

const loadCartItems = asyncHandler(async(req, res)=>{
    const user = req.user;
    if(!user){
        throw new apiError(404, "Bad Request");
    }

    const usersCart = await cartModel.findOne({user: user._id});

    console.log(usersCart)

    if(!usersCart){
        throw new apiError(401, "No Carts Exists Yet");
    }

    res.status(200)
    .json(new apiResponse(200, usersCart, "Cart Loaded Successfully"))
})

export {
    addToCart,
    loadCartItems
}