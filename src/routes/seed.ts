import { Router } from 'express';
import SeedController from '@controllers/Seed';
import requestWrapper from '@middleware/requestWrapper';
import * as validator from '@middleware/validation/seed';
import isAuthenticated from '@middleware/isAuthenticated';

const seedRouter = Router();

seedRouter.get('/all', requestWrapper(SeedController.getSeeds));
seedRouter.post('/add-seed', isAuthenticated, validator.addSeed, requestWrapper(SeedController.addSeed));

export default seedRouter;
