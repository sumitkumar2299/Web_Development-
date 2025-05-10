import express from "express";
import { config } from "dotenv";
import paymentRoute from './routes/PaymentRoutes.js';
import cors from "cors"


config({path:"./config/config.env"})

export const app = express();

app.use(cors());

import router from "./routes/PaymentRoutes.js";

app.use("/api",paymentRoute);


