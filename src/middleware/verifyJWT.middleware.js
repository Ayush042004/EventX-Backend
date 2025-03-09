import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

export const verifyJWT = async (req, res, next) => {
    
    const token = req.cookies?.accessToken;

    if(!token) res.status(401).json({message:"Access token is missing"})

    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
    const user = await User.findById(decoded._id)

    if(!user) throw new Error("Invalid Access Token")

    req.user = user;
    next();
}