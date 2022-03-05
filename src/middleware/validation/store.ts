import { celebrate, Joi } from 'celebrate';

export const createStore = celebrate({
  body: Joi.object().keys({
    storeName: Joi.string().min(2).max(100).required(),
  }),
});
