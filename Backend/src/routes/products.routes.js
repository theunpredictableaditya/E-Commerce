import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createProduct } from "../controllers/products.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/add-product").post(
    verifyAdmin,
    upload.single("productImage"),
    createProduct
)

export default router;