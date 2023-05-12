import { Request, Response, Router } from "express";
import authMiddleware from "../middleware/auth";

const roomRouter = Router();

//retorna todas as salas do sistema
roomRouter.get('/', authMiddleware, (req: Request, res: Response) => {

});

//retorna uma sala em específico
roomRouter.get('/:id', authMiddleware, (req: Request, res: Response) => {

});

// cadastra uma nova sala no sistema
roomRouter.post('/', authMiddleware, (req: Request, res: Response) => {

});

// atualiza uma sala em específico
roomRouter.put('/:id', authMiddleware, (req: Request, res: Response) => {

});

// desativa uma sala em específico, irreversível
roomRouter.delete('/:id', authMiddleware, (req: Request, res: Response) => {

});

export default roomRouter;