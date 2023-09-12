const Joi = require('joi');

const contactsSchema = Joi.object({
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
});
module.exports = { contactsSchema };
