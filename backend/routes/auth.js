import { Router } from 'express'
import authController from '../controllers/auth.js'
import registerMiddleware from '../middleware/signup.js';

const authRoute = Router()

authRoute.post('/register', registerMiddleWare, authController.register);
