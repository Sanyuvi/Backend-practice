import express from "express";
import { studentRouter } from "./Routes/students.js";
import { userRouter } from "./Routes/user.js";
import dotenv from "dotenv";
import cors from "cors";
import { isAuthenticated } from "./Authentication/auth.js";

//initializing express server
const app = express();

dotenv.config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

// application routes
app.use("/students", isAuthenticated, studentRouter);
app.use("/user", userRouter);

//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));
