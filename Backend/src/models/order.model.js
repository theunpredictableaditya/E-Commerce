import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: Number
    }],
    totalAmount: Number,
    status: {
        type: String,
        enum: ["PENDING", "SHIPPED", "DELIVERED"],
        default: "PENDING"
    }
})

export const orderModel = mongoose.model("Order", orderSchema);