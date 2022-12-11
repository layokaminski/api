const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const { isValidCreateUser } = require('../middlewares/isValidCreateUser');
const { isValidExistUser } = require('../middlewares/isValidExistUser');

router.post('/', isValidCreateUser, isValidExistUser, userController.createUser);

module.exports = router;
