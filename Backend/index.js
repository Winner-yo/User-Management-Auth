import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import User from "./models/userModel.js";
import userRouters from "./routers/userRoutes.js";

app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRouter);

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`)
})