const userService = require("../services/userService");

const createUser = async (req, res) => {
  const { nickname, email, password } = req.body;

  const { token } = await userService.create({ nickname, email, password });

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
