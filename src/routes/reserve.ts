import { Request, Response, Router } from "express";
import authMiddleware from "../middleware/auth";

const reserveRouter = Router();

//retorna todas as reservas do sistema
reserveRouter.get('/',authMiddleware, (req: Request, res: Response)=>{

});

//retorna uma reserva em específico
reserveRouter.get('/:id',authMiddleware, (req: Request, res: Response)=>{

});

// cadastra uma nova reserva no sistema
reserveRouter.post('/',authMiddleware, (req: Request, res: Response)=>{

});

// atualiza uma reserva em específico
reserveRouter.put('/:id',authMiddleware, (req: Request, res: Response)=>{

});

// desativa uma reserva em específico, irreversível
reserveRouter.delete('/:id',authMiddleware, (req: Request, res: Response)=>{

});

export default reserveRouter;