import mongoose from "mongoose";

const connectDB=async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI!)
        await console.log("connected to database successfully")
    } catch (error) {
        console.log(`connection error ${error}`);
    }
}

export default connectDB;