const express = require('express');
const authController = require('../constrollers/auth_controller.js')

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register', authController.registerUserController);


module.exports = authRouter;