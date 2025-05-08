import jwt from 'jsonwebtoken'
import { User } from "../models/User.js"


export const isAuthenticated = async(req, res, next) => {
    const token = req.header('Auth')
    // console.log("check token = ", token)

    if(!token) return res.json({message: "login first"})

    const decoded = jwt.verify(token, process.env.JWT);
    // console.log("token data = ", decoded)
    const id = decoded.userId;

    let user = await User.findById(id)
    if(!user) return res.json({message: "User not found"})
    
    req.user = user ;
    next();   
}
