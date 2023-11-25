import { Request, Response } from "express"

export class LoginViewController {
    constructor() { }

    Login = async (req: Request, res: Response) => {
        try {
            res.render('login', { layout: "login.layout.handlebars" })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }


    Register = async (req: Request, res: Response) => {
        try {
            res.render('register', { layout: "login.layout.handlebars" })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

}