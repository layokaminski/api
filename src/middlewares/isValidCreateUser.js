const Joi = require('joi');

const RULE_HARD_PASSWORD = /^(?=.{8,})(?=.*[a-z])(?=.*)(?=.*[!@#$%^&+=]).*$/;

const isValidCreateUser = (req, res, next) => {
  const { error } = Joi.object({
    nickname: Joi.string().min(8).not().empty()
      .required(),
    email: Joi.string().email().not().empty()
      .required(),
    password: Joi.string().min(6).not().empty()
      .required().regex(RULE_HARD_PASSWORD)
      .messages({
        'string.min': '"password" length must be 6 characters long',
        'string.pattern.base': '"password" required one special character and one number',
      }),
  }).validate(req.body);


  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  isValidCreateUser,
};
