
import express from 'express';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import authRoute from './routes/authRoute.js';
import orderRoutes from './routes/orderRoute.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';   
import cors from 'cors';   
dotenv.config(); 

const app =  express();


app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
)

connectDb()
app.use(express.json())
app.use(express.urlencoded({encoded:true}));
app.use(cookieParser())


app.get('/test',(req,res)=>{

    res.cookie('name', 'shristi', {maxAge: 10*1000, httpOnly: true});

    res.status(200).json({
        message : " get from app.js"
    })
})

app.get("/api/clearCookie", (req, res) => {
    res.clearCookie('name'),{
        maxAge:10*60*1000,
        httpOnly: true
    }
    res.status(200).json({ message: "Cookie cleared" });
});


app.use('/api/user',userRoutes )
app.use("/api/product", productRoutes)
app.use("/api/auth", authRoute)
app.use('/api/order', orderRoutes)


const port =4000
app.listen(port,()=>{
    console.log("port started at:",port)
})









