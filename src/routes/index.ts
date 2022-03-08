import { Router } from 'express';
import userRouter from './user';
import orderRouter from './order';
import storeRouter from './store';
import seedRouter from './seed';
import fertilizerRouter from './fertilizer';

const router = Router();

router.use('/user', userRouter);
router.use('/orders', orderRouter);
router.use('/stores', storeRouter);
router.use('/seeds', seedRouter);
router.use('/fertilizers', fertilizerRouter);

export default router;
