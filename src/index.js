// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT || 8000}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!", err)
})

/*
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const app = express()

// immidiate invoke function
( async() => {

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("application not able to talk to dbs ")
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }

})()

*/