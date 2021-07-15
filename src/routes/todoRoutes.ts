import { Router } from "express";
import PostController from "../controllers/TodoController";
const router=Router();
router.post('/',PostController.postPost);
router.get('/',PostController.getPost);
router.get('/:id',PostController.onePost);
router.put('/:id',PostController.putPost)
router.delete('/:id',PostController.deletePost);
export default router; 