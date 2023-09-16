const Joi = require('joi');

const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'name field is required',
    'string.empty': 'name field cannot be empty',
    'string.base': 'name field must be a string',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'any.required': 'email field is required',
      'string.empty': 'email field cannot be empty',
      'string.base': 'email field must be a string',
      'string.email': 'invalid email format',
    }),
  phone: Joi.string()
    .required()
    .custom((value, helpers) => {
      if (!/^\d+$/.test(value)) {
        return helpers.message('phone field must contain only digits');
      }
      return value;
    })
    .messages({
      'any.required': 'phone field is required',
      'string.empty': 'phone field cannot be empty',
    }),
  favorite: Joi.boolean(),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  schemas,
};
