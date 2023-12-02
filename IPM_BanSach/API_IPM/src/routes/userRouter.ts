import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/userController';
const userRouter = Router();
const userController = container.resolve(UserController);
userRouter.post('/login', userController.authenticate.bind(userController));
userRouter.post('/createUser', userController.CreateUser.bind(userController));
userRouter.post('/saveUser', userController.saveUser.bind(userController));
userRouter.post('/upload', userController.UploaFile.bind(userController) );
export default userRouter;