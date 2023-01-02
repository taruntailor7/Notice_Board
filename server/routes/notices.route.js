import express from 'express';
import { createNotice, getAllNotices } from '../controllers/notices.controller.js';

const postRouter = express.Router();

postRouter.post("/create", createNotice);

postRouter.get("/", getAllNotices);

export default postRouter;