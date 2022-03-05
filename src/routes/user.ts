import { Router } from 'express';
import UserController from '@controllers/User';
import requestWrapper from '@middleware/requestWrapper';
import * as validator from '@middleware/validation/user';

const userRouter = Router();

userRouter.post('/sign-up', validator.createUserAccount, requestWrapper(UserController.createUserAccount));
userRouter.post('/login', validator.login, requestWrapper(UserController.login));

export default userRouter;
