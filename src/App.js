import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
dotenv.config();
const app = express();
app.use(cors({ origin:process.env.URL_ALLOWED, credentials:true}))
app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
export default app;