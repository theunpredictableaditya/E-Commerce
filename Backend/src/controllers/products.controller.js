import { apiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler"

const createProduct = asyncHandler(async(req, res)=>{
    //get all the data from the user
    const {productName, productDescription, productQuantity, productPrice} = req.body;

    if([productName, productDescription, productQuantity, productPrice].some(field=>field.trim()==="")){
        throw new apiError(400, "All fields Are Required")
    }

    const productImage = req.files;
    console.log(req.body, productImage)
})

export {
    createProduct
}