import { RequestHandler } from 'express';
import {User} from '../entity/User';
import {validate} from 'class-validator'
import { getRepository } from 'typeorm';
class AuthController{
    static login:RequestHandler=async(req,res)=>{
        const{email,password}=req.body;
        const useRepository=getRepository(User);
        let user:User;
        try{
            user=await useRepository.findOne({email});
            if(user&&!user.isValidPassword(password)){
                return res.status(401).send("Incorrect password")
            }
            res.status(200).json({access_token:user.generateJWT()})
        }catch(e){
            return res.status(409).send(e);
        } 
         
    }
    static register:RequestHandler=async(req,res)=>{
        const{email,password,firstName,lastName}=req.body;
        let user=new User();
        user.email=email;
        user.password= user.setPassword(password);
        user.firstName=firstName;
        user.lastName=lastName;
        const errors=await validate(user);
        if(errors.length>0){
            return res.status(400).send(errors);
        }
        const useRepository= getRepository(User);
        try{
            await useRepository.save(user);
        }catch(e){
            console.log(e);
            return res.status(409).send("User already exists");
        }
        res.status(201).send("user created");
    }
}
export default AuthController;