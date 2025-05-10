import express from 'express';
import payment from './Routes/productRoutes.js';
const  app = express();
import cors from 'cors';


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/api/v1",payment)


export default app;
