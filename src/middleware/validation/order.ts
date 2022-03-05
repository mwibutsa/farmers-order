import { celebrate, Joi } from 'celebrate';
import { PENDING, APPROVED, REJECTED } from '@constants/orderStatus';

export const createOrder = celebrate({
  body: Joi.object().keys({
    storeId: Joi.string().required(),
    userId: Joi.string().required(),
    landSize: Joi.number().required(),
    status: Joi.string().valid(PENDING, APPROVED, REJECTED),
  }),
});
