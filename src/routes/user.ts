import { Request , Response, Router } from "express";
import authMiddleware from "../middleware/auth";
import getAll from "../controller/User/getAll";
import getOneUser from "../controller/User/getOneUser";
import createUser from "../controller/User/createUser";

const userRouter = Router();

//retorna todos os usuários do sistema
userRouter.get('/', authMiddleware, getAll);

//retorna um usuário em específico
userRouter.get('/:cpf', authMiddleware, getOneUser);

// cadastra um novo usuário no sistema
userRouter.post('/', authMiddleware, createUser);

// atualiza um usuário em específico
userRouter.put('/:id', authMiddleware, (req: Request, res: Response) => {

});

// deleta um usuário em específico, irreversível
userRouter.delete('/:id', authMiddleware, (req: Request, res: Response) => {

});

export default userRouter;