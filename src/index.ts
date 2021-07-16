import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from "cors";
import todoRouter from './routes/todoRoutes'
import authRouter from './routes/authRoutes';
import verify from '../src/entity/Verify'
createConnection().then(async connection => {
    const app=express();
    app.use(cors());
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/todo',verify,todoRouter);
    

    app.listen(8080,()=>console.log("Server is up and running.."))


}).catch(error => console.log(error));
