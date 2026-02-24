import { uploadOnCloudinary } from "../middlewares/cloudinary.middleware.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { productModel } from "../models/product.model.js";
import { apiResponse } from "../utils/apiResponse.js";

const createProduct = asyncHandler(async(req, res)=>{
    //get all the data from the user
    const {productName, productDescription, productQuantity, productPrice, productCategory} = req.body;

    if([productName, productDescription, productQuantity, productPrice, productCategory].some(field=>field.trim()==="")){
        throw new apiError(400, "All fields Are Required")
    }

    const productImagePath = req.file.path;
    
    if(!productImagePath){
        throw new apiError(400, "Invalid Problem with product Image");
    }

    const productImageCloudinary = await uploadOnCloudinary(productImagePath);

    if(!productImageCloudinary){
        throw new apiError(400, "Invalid Problem While Uploading Product Image")
    }

    const productImage = productImageCloudinary.url;

    const product = await productModel.create({
        name: productName,
        productImage,
        price: productPrice,
        description: productDescription,
        stock: productQuantity,
        category: productCategory
    })

    if(!product){
        throw new apiError(400, "Product Can't Be Created");
    }

    res.status(200)
    .json(new apiResponse(200, product, "Product Created Successfully"));
})

const deleteProduct = asyncHandler(async(req, res)=> {
    const { productId } = req.body;

    if(!productId){
        throw new apiError(400, "Product Not Accessible")
    }

    const product = await productModel.findByIdAndDelete(productId);

    if(!product){
        throw new apiError(400, "Product Cannot Be Deleted");
    }

    res.status(200)
    .json(new apiResponse(200, product, "Product Has Been Deleted Successfully"));
})

const loadProduct = asyncHandler(async(req, res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;

    const skip = (page-1) * limit;

    const products = await productModel.find()
    .skip(skip)
    .limit(limit)
    .sort({createdAt : -1});
    
    const total = await productModel.countDocuments();

    res.status(200)
    .json(new apiResponse( 200, {
        product: products,
        hasMore: skip + products.length < total
    }, "Product List Send SuccessFully"));
})

export {
    createProduct,
    deleteProduct,
    loadProduct
}