import { Router } from 'express';
import StoreController from '@controllers/Store';
import requestWrapper from '@middleware/requestWrapper';
import * as validator from '@middleware/validation/store';
import isAuthenticated from '@middleware/isAuthenticated';

const storeRouter = Router();

storeRouter.get('/all', requestWrapper(StoreController.getStores));
storeRouter.post('/create-store', isAuthenticated, validator.createStore, requestWrapper(StoreController.createStore));

export default storeRouter;
