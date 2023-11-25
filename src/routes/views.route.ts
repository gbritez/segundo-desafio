import express from 'express'
import { LoginViewController } from '../controllers/view-controllers/login.view-controller'

const viewsRouter = express.Router()
const loginViewController = new LoginViewController()

viewsRouter.get('/', loginViewController.Login)
viewsRouter.get('/login', loginViewController.Login)
viewsRouter.get('/register', loginViewController.Register)


export default viewsRouter