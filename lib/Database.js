import mongoose from "mongoose";


export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then( () => {console.log("Database connected successfully")})
    .catch( (err) => {
        console.log("Database connection failed");
        console.error(err);
        process.exit(1);
    } )
}