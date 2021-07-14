import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as BodyParser from 'body-parser';
import * as cors from "cors";
import todoRouter from './routes/todoRoutes'
createConnection().then(async connection => {
    const app=express();
    app.use(cors());
    app.use(BodyParser.json());
    app.use('/',todoRouter)


    app.listen(8080,()=>console.log("Server is up and running.."))


}).catch(error => console.log(error));
