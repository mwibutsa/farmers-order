import { celebrate, Joi } from 'celebrate';
import { PENDING, APPROVED, REJECTED } from '@constants/orderStatus';

export const createOrder = celebrate({
  body: Joi.object().keys({
    storeId: Joi.string().required(),
    landSize: Joi.number().required(),
    status: Joi.string().valid(PENDING, APPROVED, REJECTED),
    seedId: Joi.string().min(20).required(),
    fertilizerId: Joi.string().min(20).required(),
  }),
});

export const updateOrder = celebrate({
  body: Joi.object().keys({
    landSize: Joi.number(),
    status: Joi.string().valid(PENDING, APPROVED, REJECTED),
  }),
  params: Joi.object().keys({
    orderId: Joi.string().min(20).required(),
  }),
});
