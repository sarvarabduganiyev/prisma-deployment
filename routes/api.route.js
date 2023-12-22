import express from 'express';
import {PostsIndex, PostsCreate} from "../controllers/posts.controller.js";
import {UserById, UserCreate, UsersIndex} from "../controllers/user.controller.js";

const router = express.Router();


// posts crud
router.get('/posts', PostsIndex);
router.post('/post-create', PostsCreate);

// users crud
router.get("/users", UsersIndex);
router.get("/user/:id",UserById)
router.post("/user-create", UserCreate);




export default router;
