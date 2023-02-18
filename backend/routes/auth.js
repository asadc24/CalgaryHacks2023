const { Router } = require('express')
const authController = require('../controllers/auth.js')
const registerMiddleware = require('../middleware/signup.js');

const authRoute = Router()

authRoute.post('/register',  authController.register);
