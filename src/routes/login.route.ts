import express from 'express'
import { LoginController } from '../controllers/login.controller'

const loginRouter = express.Router()
const loginController = new LoginController()
loginRouter.post('/register', loginController.Register)
loginRouter.post('/login', loginController.Login)
export default loginRouter