const Joi = require("joi");
const { joiPassword } = require("joi-password");

const createUser = {
  body: Joi.object()
    .keys({
      user_name: Joi.string().max(16).required(),
      nick_name: Joi.string().min(1).max(16).required(),
      email: Joi.string().email().required(),
      password: joiPassword
        .string()
        .min(8)
        .max(16)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .required(),
    })
    .required(),
};

const editUser = {
  body: Joi.object().keys({
    nick_name: Joi.string().min(1).max(16).required(),
    email: Joi.string().email().required(),
    bio: Joi.string().max(150),
    gender: Joi.array().items(Joi.string().valid("male", "female")),
    date_of_birth: Joi.date().raw(),
  }),
};

module.exports = {
  createUser,
};
