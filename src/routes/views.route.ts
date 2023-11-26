import express from 'express'
import { LoginViewController } from '../controllers/view-controllers/login.view-controller'
import { ProductsViewController } from '../controllers/view-controllers/products.view-controller'
import passport from 'passport'

const viewsRouter = express.Router()
const loginViewController = new LoginViewController()
const productsViewController = new ProductsViewController()

viewsRouter.get('/', productsViewController.GetAll)
viewsRouter.get('/login', loginViewController.Login)
viewsRouter.get('/register', loginViewController.Register)


export default viewsRouter