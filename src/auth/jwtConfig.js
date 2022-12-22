const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRESIN = process.env.JWT_EXPIRESIN;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM;

const jwtConfig = {
  expiresIn: JWT_EXPIRESIN,
  algorithm: JWT_ALGORITHM,
};

const createToken = (userWithoutPassword) => {
  const token = jwt.sign({ data: userWithoutPassword }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};