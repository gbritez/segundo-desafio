import { Request, Response } from 'express'
import passport from "passport"
import User from '../models/user.model';
import { compareHash, encrypt, generateToken } from '../utils';
export class LoginController {
    constructor() { }
    Login = async (req: Request, res: Response, next) => {
        passport.authenticate("login",
            {
                successRedirect: '/',
            })(req, res, next)
    }

    Logout = (req: Request, res: Response) => {
        try {

        } catch (error) {

        }
    }

    Register = async (req: Request, res: Response) => {

        const { first_name, last_name, email, age, password } = req.body
        try {
            const userExists = await User.findOne({ email });
            if (userExists) {
                return res.status(500).json({ message: 'Email already in use' });
            }
            const user = await User.create({
                first_name: first_name,
                last_name: last_name,
                age: age,
                email: email,
                role: 'user',
                password: await encrypt(password)
            })
            return res.status(200).json({ message: 'User created' })
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}