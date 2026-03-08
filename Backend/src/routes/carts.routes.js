import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addToCart, loadCartItems } from "../controllers/cart.controller.js";

const router = Router();

router.route("/addToCart").post(
    verifyJWT,
    addToCart
)

router.route("/loadCarts").get(
    verifyJWT,
    loadCartItems
)

export default router;