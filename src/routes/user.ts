import UserController from "controllers/User";
import { Router } from "express";
import requestWrapper from "middleware/requestWrapper";

const userRouter = Router();

userRouter.post("/sign-up", requestWrapper(UserController.createUserAccount));
userRouter.get("/all", requestWrapper(UserController.login));

export default userRouter;
