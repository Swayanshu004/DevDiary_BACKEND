import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`MongoDB connected - DB hosted On : ${connectionInstance}`);
    } catch (error) {
        console.log("MONGO_DB CONNECTION ERROR : ", error);
        process.exit(1);
    }
}

export default connectDB;