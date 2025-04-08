

import { instance } from "../server.js";



export const checkout = async(req,res)=>{
    const options = {
        amount:500, // amount in the smallest currency unit
        currency:"INR",
        receipt:"order_rcptid_11"
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
        success:true,
    })
};

