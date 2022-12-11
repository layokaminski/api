const { User } = require('../models');

const findByEmail = async (email) => {
  const findEmail = await User.findOne({ where: { email } });

  return findEmail;
};

const findByNickName = async (nickname) => {
  const findNickName = await User.findOne({ where: { nickname } });

  return findNickName;
};

const createUser = async ({ nickname, email, password }) => {
  const newUser = await User.create({ nickname, email, password });

  return newUser;
};

module.exports = {
  createUser,
  findByEmail,
  findByNickName,
};