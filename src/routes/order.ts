import { Router } from 'express';
import OrderController from '@controllers/Order';
import requestWrapper from '@middleware/requestWrapper';
import * as validator from '@middleware/validation/order';
import isAuthenticated from '@middleware/isAuthenticated';

const orderRouter = Router();

orderRouter.get('/all', requestWrapper(OrderController.getUserOrders));
orderRouter.post('/create-order', isAuthenticated, validator.createOrder, requestWrapper(OrderController.createOrder));

export default orderRouter;
