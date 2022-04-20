import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app=express();

dotenv.config();

//middleware
app.use(cors());
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`server running at port ${PORT} `)
)