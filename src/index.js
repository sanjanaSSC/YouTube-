//require('dotenv').config({path: './env})
import dotenv from "dotenv"
import {app} from "./app.js"
import connectDB from './db/index.js';

dotenv.config({
    path: '/env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDb connection failed", err);
})
















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