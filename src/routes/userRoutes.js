const express = require('express');

const router = express.Router();

const userMiddlewares = require('../middlewares');
const userController = require('../controller/userController');

router.post('/',
  userMiddlewares.isValidCreateUser,
  userMiddlewares.isValidExistUser,
  userController.createUser
);

module.exports = router;
