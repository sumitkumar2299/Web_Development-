import app from './app.js';
import dotenv from 'dotenv';
import Razorpay from 'razorpay'
dotenv.config({path:"Config/config.env"})
const port = process.env.PORT
// import { processPayment } from './Controllers/ProductController.js';


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})





app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})

