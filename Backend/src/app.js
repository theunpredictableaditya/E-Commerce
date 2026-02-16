import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: `${process.env.CORS_ORIGIN}`,
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


//global error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// console.log(process.env.CLOUD_NAME, process.env.CLOUD_KEY)

export { app };