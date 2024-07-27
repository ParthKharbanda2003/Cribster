import express from 'express';
import mongoose from 'mongoose';
// import connectDB from '../database/mongodb.js';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('con to mongodb!');
    }).catch((err) => {
        console.log(err);
    })


const app = express();

