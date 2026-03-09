import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { orderModel } from "../models/order.model.js";
import { productModel } from "../models/product.model.js";

const createOrder = asyncHandler(async(req, res)=> {
    const user = req.user;
    const productId = req.query.productId;
    const quantity = parseInt(req.query.quantity);
    const product = await productModel.findOne({_id: productId});
    const totalAmount = product.price * quantity;

    if(!user){
        throw new apiError(404, "Bad Request");
    }

    if(!product){
        throw new apiError(400, "Can't Find Such Product");
    }

    const doesOrderExist = await orderModel.findOne({user: user._id});

    if(doesOrderExist){
        doesOrderExist.items.push({
            product: productId,
            quantity: quantity,
            totalAmount: totalAmount,
            status: "PENDING"
        })

        await doesOrderExist.save();
        res.status(200)
        .json(new apiResponse(200, doesOrderExist, "Order Placed Successfully"));
    }else{
        const newOrder = await orderModel.create({
            user: user._id,
            items: [{
            product: productId,
            quantity: quantity,
            totalAmount: totalAmount,
            status: "PENDING"
        }]
        })

        if(!newOrder){
            throw new apiError(409, "Error Occured While Placing Order");
        }

        res.status(200)
        .json(new apiResponse(200, newOrder, "Order Placed Successfully"));
    }
})

const loadOrder = asyncHandler(async(req, res)=>{
    const user = req.user;
        if(!user){
            throw new apiError(404, "Bad Request");
        }
    
        const usersOrder = await orderModel.findOne({user: user._id});
    
        console.log(usersOrder)
    
        if(!usersOrder){
            throw new apiError(401, "No Orders Placed Yet");
        }
    
        res.status(200)
        .json(new apiResponse(200, usersOrder, "Orders Loaded Successfully"))
})

export {
    createOrder,
    loadOrder
}