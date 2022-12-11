const Joi = require('joi');

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

module.exports = {
  isValidCreateUser,
};
