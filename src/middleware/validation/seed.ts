import { celebrate, Joi } from 'celebrate';

export const addSeed = celebrate({
  body: Joi.object().keys({
    seedName: Joi.string().required(),
  }),
});
