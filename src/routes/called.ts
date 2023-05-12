import { Request, Response, Router } from "express";
import authMiddleware from "../middleware/auth";

const calledRouter = Router();

//retorna todos os chamados do sistema
calledRouter.get('/',authMiddleware, (req: Request, res: Response)=>{

});

//retorna um chamado em específico
calledRouter.get('/:id',authMiddleware, (req: Request, res: Response)=>{

});

// cadastra um novo chamado no sistema
calledRouter.post('/',authMiddleware, (req: Request, res: Response)=>{

});

// atualiza um chamado em específico
calledRouter.put('/:id',authMiddleware, (req: Request, res: Response)=>{

});

// desativa um chamado em específico, irreversível
calledRouter.delete('/:id',authMiddleware, (req: Request, res: Response)=>{

});

export default calledRouter;