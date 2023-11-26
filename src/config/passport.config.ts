import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt"
import { Strategy as LocalStrategy } from "passport-local"
import User from "../models/user.model";
import { compareHash, generateToken } from "../utils";

console.log(process.env.SECRET_KEY_JWT, "secretKey")
// passport.use('jwt', new JWTStrategy(
//     {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: process.env.SECRET_KEY_JWT
//     }, async (payload, done) => {
//         console.log(payload)
//     }))

passport.use('login', new LocalStrategy({ passReqToCallback: true, usernameField: 'email' },
    async (req: Request, email: string, password: string, done) => {
        try {
            const user = await User.findOne({ email }).lean();
            if (!user) {
                return done(null, false);
            }

            const isPasswordValid = await compareHash(password, user.password);
            if (!isPasswordValid) {
                return done(null, false);
            }
            const isAdmin = (email === 'adminCoder@coder.com' && password === 'adminCod3r123')
            user.role = isAdmin ? 'admin' : 'user'
            const token = generateToken(user);
            return done(null, user, { token });
        } catch (error) {
            return done(error);
        }
    }))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id)
        done(null, user)
    }
    catch (error) {
        done(error)
    }
})