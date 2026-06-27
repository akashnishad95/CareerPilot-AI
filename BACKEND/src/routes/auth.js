const express = require('express');
const authController = require('../controllers/auth_controller.js')
const { authUser}  = require('../middlewares/auth_middleware.js')

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register', authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @desc Login a user with Email and Password
 * @access Public
 */


authRouter.post('/login', authController.loginUserController);


/**
 * @route GET /api/auth/logout
 * @desc clear the token from user cookies and add it to the blacklist
 * @access Public
 */
authRouter.get('/logout', authController.logoutUserController);

/**
 * @route Get /api/auth/get-me
 * @desc Get the logged-in user's information
 * @access Private
 */
authRouter.get('/get-me', authUser, authController.getMeController);

module.exports = authRouter;