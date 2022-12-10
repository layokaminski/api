const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const { isValidCreateUser, isValidExistUser } = require('../middlewares/isValidCreateUser');

router.post('/', isValidCreateUser, isValidExistUser, userController.createUser);

module.exports = router;
