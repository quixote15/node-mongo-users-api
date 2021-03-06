const objectId = require('joi-objectid');
const Joi = require('joi');

Joi.objectId = objectId(Joi);

module.exports = {
  create: {
    body: {
      name: Joi.string(),
      username: Joi.string().required(),
      dateOfBirth: Joi.date(),
      address: Joi.string(),
      description: Joi.string(),
    },
  },
  update: {
    body: {
      username: Joi.string(),
      name: Joi.string(),
      dateOfBirth: Joi.date(),
      address: Joi.string(),
      description: Joi.string(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    },
  },
};
