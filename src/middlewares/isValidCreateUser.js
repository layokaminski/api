const Joi = require('joi');
const userService = require("../services/userService");

const isValidCreateUser = (req, res, next) => {
  const { error } = Joi.object({
    nickname: Joi.string().min(8).not().empty()
    .required(),
    email: Joi.string().email().not().empty()
    .required(),
    password: Joi.string().min(6).not().empty()
    .required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message })
  }

  next();
};

const isValidExistUser = async (req, res, next) => {
  const { nickname, email } = req.body;

  const isValidEmail = await userService.findByEmail(email);
  const isValidNickName = await userService.findByNickName(nickname);

  if (isValidEmail) {
    return res.status(409).json({ message:  'Usuario já existe!'})
  }

  if (isValidNickName) {
    return res.status(409).json({ message:  'Usuario já existe!'})
  };

  return next();
};

module.exports = {
  isValidCreateUser,
  isValidExistUser,
};
