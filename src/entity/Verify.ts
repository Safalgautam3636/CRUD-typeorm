import { RequestHandler,Request } from 'express';
import * as jwt from 'jsonwebtoken';
export interface DefineType extends Request {
    user: any;
}
const verify:RequestHandler=(req:DefineType,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).send("Access Denied");
    }
    try{
        const verified=jwt.verify(token,"SECRET");
        req.user=verified;
        next();

    }
    catch(e){
        res.status(404).send("Invalid token");
    }
}
export default verify;