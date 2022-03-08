import { celebrate, Joi } from 'celebrate';

export const addFertilizer = celebrate({
  body: Joi.object().keys({
    fertilizerName: Joi.string().required(),
  }),
});
