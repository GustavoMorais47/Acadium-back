import { Request , Response, Router } from "express";
import authMiddleware from "../middleware/auth";

const userRouter = Router();

//retorna todos os usuários do sistema
userRouter.get('/', authMiddleware, (req: Request, res: Response) => {
    
});

//retorna um usuário em específico
userRouter.get('/:id', authMiddleware, (req: Request, res: Response) => {

});

// cadastra um novo usuário no sistema
userRouter.post('/', authMiddleware, (req: Request, res: Response) => {

});

// atualiza um usuário em específico
userRouter.put('/:id', authMiddleware, (req: Request, res: Response) => {

});

// deleta um usuário em específico, irreversível
userRouter.delete('/:id', authMiddleware, (req: Request, res: Response) => {

});

export default userRouter;