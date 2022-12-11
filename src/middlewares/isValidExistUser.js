const userService = require("../services/userService");

const isValidExistUser = async (req, res, next) => {
  const { nickname, email } = req.body;

  const isValidEmail = await userService.findByEmail(email);
  const isValidNickName = await userService.findByNickName(nickname);

  if (isValidEmail || isValidNickName) {
    return res.status(409).json({ message:  'Usuario já existe!'})
  }

  return next();
};

module.exports = {
  isValidExistUser,
};
