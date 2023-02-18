const { Router } = require('express')
const authController = require('../controllers/auth.js')
const registerMiddleware = require('../middleware/signup.js');

const authRoute = Router()

authRoute.post('/register',  registerMiddleware, authController.register);
authRoute.post('/login', authController.login)
authRoute.post('/logout', authController.logout)
authRoute.post('/refresh_token', authController.generateAccessToken)

module.exports = authRoute

