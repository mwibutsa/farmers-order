import { Router } from 'express';
import FertilizerController from '@controllers/Fertilizer';
import requestWrapper from '@middleware/requestWrapper';
import * as validator from '@middleware/validation/fertilizer';
import isAuthenticated from '@middleware/isAuthenticated';

const fertilizerRouter = Router();

fertilizerRouter.get('/all', requestWrapper(FertilizerController.getFertilizers));
fertilizerRouter.post(
  '/add-fertilizer',
  isAuthenticated,
  validator.addFertilizer,
  requestWrapper(FertilizerController.addFertilizer),
);

export default fertilizerRouter;
