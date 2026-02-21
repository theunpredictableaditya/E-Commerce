import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateCredentials, userAlreadyloggedIn } from "../controllers/users.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(
    verifyJWT,
    logoutUser
)

router.route("/alreadyLoggedIn").post(userAlreadyloggedIn)

router.route("/updateCredentials").patch(verifyJWT, updateCredentials)

export default router;