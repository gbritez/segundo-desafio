import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SECRET_KEY_JWT = "secretJWT"

export const generateToken = (user) => {
    const token = jwt.sign(user, SECRET_KEY_JWT, { expiresIn: 300 })
    return token;
}

export const compareHash = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const encrypt = (password) => {
    const salt = bcrypt.genSalt();
    const hash = bcrypt.hash(password, salt)
    return hash;
}