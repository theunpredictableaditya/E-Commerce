import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(cookieParser());
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));

//routes
import userRouter from "./routes/users.routes.js"
import productRouter from "./routes/products.routes.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

export { app };