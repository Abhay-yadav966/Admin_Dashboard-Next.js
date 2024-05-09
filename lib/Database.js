import mongoose from "mongoose";

// we are storing the boolean value to decide database is connected or not
const config = {
    isConnected : 0,
}

export const connectDB = async () => {

    try{

        // checking database is already is connected or not
        // if database is already connected
        if(config.isConnected){
            return;
        }
        
        // connecting the database
        const {connection} = await mongoose.connect(process.env.MONGODB_URL)
        
        // update the value when the database connection is established 
        config.isConnected = connection.readyState;

        console.log("Database connected successfully");

    }
    catch(err){
        console.log("Database connection failed");
        console.error(err);
        process.exit(1);
    }
}