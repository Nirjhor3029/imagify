import mongoose from "mongoose";

const connectDB = async () => {
    try {

        console.log(`Connecting to MongoDB: ${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        // return;
        // Event
        mongoose.connection.on('connected', () => {
            console.log('MongoDB is connected');
        })
        
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB