const RepositoryUsers = require('../repository/RepositoryUsers');
const { createToken } = require('../auth/jwtConfig');

const create = async ({ nickname, email, password }) => {
  const user = await RepositoryUsers.createUser({ nickname, email, password });

  const { password: _pass, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return { user: userWithoutPassword, token };
};

const findByEmail = async (email) => {
  const findEmail = await RepositoryUsers.findByEmail(email);

  return findEmail;
}

const findBynickname = async (nickname) => {
  const findBynickname = await RepositoryUsers.findBynickname(nickname);

  return findBynickname;
}

module.exports = {
  create,
  findByEmail,
  findBynickname,
};