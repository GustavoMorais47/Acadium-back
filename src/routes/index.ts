import { Router } from "express";

import calledRouter from "./called";
import reserveRouter from "./reserve";
import roomRouter from "./room";
import userRouter from "./user";
import Auth from "../controller/Auth";
import authMiddleware from "../middleware/auth";

const router = Router();

router.post('/login', (req, res) => Auth(req, res));

router.use('/user', authMiddleware ,userRouter);
router.use('/called', calledRouter);
router.use('/reserve', reserveRouter);
router.use('/room', roomRouter);

export default router;