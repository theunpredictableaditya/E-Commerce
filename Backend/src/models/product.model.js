import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
})

export const productModel = mongoose.model("Product", productSchema);