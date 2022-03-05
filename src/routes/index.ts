import { Router } from 'express';
import userRouter from './user';
import orderRouter from './order';
import storeRouter from './store';

const router = Router();

router.use('/user', userRouter);
router.use('/orders', orderRouter);
router.use('/stores', storeRouter);

export default router;
