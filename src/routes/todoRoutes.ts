import { Router } from "express";
import PostController from "../controllers/TodoController";
const router=Router();
router.post('/todo',PostController.postPost);
router.get('/todo',PostController.getPost);
router.get('/todo/:id',PostController.onePost);
router.put('/todo/:id',PostController.putPost)
router.delete('/todo/:id',PostController.deletePost);
export default router; 