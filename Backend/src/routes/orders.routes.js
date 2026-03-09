import { Router } from "express";
import { verifyAdmin, verifyJWT } from "../middlewares/auth.middleware.js";
import { createOrder, loadOrder } from "../controllers/order.controller.js";

const router = Router();

router.route("/placeOrder").post(
    verifyJWT,
    createOrder
)

router.route("/getOrder").get(
    verifyJWT,
    loadOrder
)

export default router;