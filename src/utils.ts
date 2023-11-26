import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generateToken = (user) => {
    const token = jwt.sign(user, process.env.SECRET_KEY_JWT, { expiresIn: 300 })
    return token;
}

export const compareHash = async (password, hash) => {
    const result = bcrypt.compare(password, hash)
    return result;
}

export const encrypt = async (password) => {
    const hash = bcrypt.hash(password, 10)
    return hash;
}