import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import MongoStore from 'connect-mongo'
import loginRouter from './routes/login.route';
import viewsRouter from './routes/views.route';
import session from 'express-session'
import Handlebars from 'express-handlebars'
import cookieParser from "cookie-parser"
import passport from "passport"
import './config/passport.config'
import './config/db.config'
import { engine } from 'express-handlebars'

const app: Application = express();
const port = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(cookieParser("SecretCookie"))
app.use(
    session({
        store: new MongoStore({ mongoUrl: process.env.DB_URI }),
        secret: 'secretSession',
        cookie: { maxAge: 60000 }
    })
)
app.use(express.static(__dirname + '/public'))

//passport
app.use(passport.initialize())
app.use(passport.session())
//handlebars

app.engine('handlebars', engine({
    // handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Routes
app.use('/api/', loginRouter)
app.use('/', viewsRouter)

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});