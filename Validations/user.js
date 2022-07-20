const Joi = require("joi");
const { joiPassword } = require("joi-password");

const createUser = {
  body: Joi.object()
    .keys({
      userName: Joi.string().max(16).required(),
      nickName: Joi.string().min(1).max(16).required(),
      email: Joi.string().email().required(),
      password: joiPassword
        .string()
        .min(8)
        .max(16)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .required(),
      isAdmin: Joi.boolean().default(false),
    })
    .required(),
};

module.exports = {
  createUser,
};
