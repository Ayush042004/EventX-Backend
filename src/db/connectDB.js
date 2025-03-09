import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("connected");
        
    } catch (error) {
        console.log("Connection Error",error);
        
    }
}
