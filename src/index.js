import mongoose from 'mongoose';
import { DB_NAME } from './constants.';
import express from 'express';
import connectDB from './db';
const app = express();

connectDB
















// async function connectDB()()

/*;(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("Error",err);
            throw err;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }catch(err){
        console.log("Error",err);
        throw err
    }
})()*/