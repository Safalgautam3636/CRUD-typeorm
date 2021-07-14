import {RequestHandler } from "express";
import { getRepository } from "typeorm";
import {Post} from '../entity/Post';
class TodoController{
    static postPost:RequestHandler=async(req,res)=>{
        const newPost={
            title:req.body.title,
            content:req.body.content
        }
        const post=getRepository(Post).create(newPost);
        const result=await getRepository(Post).save(post);
        return res.json(result);
    }
    static getPost:RequestHandler=async(req,res)=>{
        const result=await getRepository(Post).find();
        res.json(result);
    }
    static onePost:RequestHandler=async(req,res)=>{
        const result=await getRepository(Post).findOne(req.params.id);
        res.json(result);
    }
    static putPost:RequestHandler=async(req,res)=>{
        const post=await getRepository(Post).findOne(req.params.id);
        getRepository(Post).merge(post,req.body);
        const result=await getRepository(Post).save(post);
        return res.json(result);

    }
    static deletePost:RequestHandler=async(req,res)=>{
        const deleteD=await getRepository(Post).delete(req.params.id);
        res.send(deleteD);
    }
}
export default TodoController;