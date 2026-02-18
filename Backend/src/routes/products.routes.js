import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { createProduct, deleteProduct } from "../controllers/products.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/add-product").post(
    verifyAdmin,
    upload.single("productImage"),
    createProduct
)

router.route("delete-product").post(
    verifyAdmin,
    deleteProduct
)

export default router;