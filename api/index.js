import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js';

import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Welcome to mongodb!');
    }).catch((err) => {
        console.log(err);
    })


const app = express();

app.use(express.json()); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//create api route

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);