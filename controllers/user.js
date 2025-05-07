import {User} from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (name == "" || email == "" || password == "")
    return res.json({ message: "All field are required" });

  let user = await User.findOne({ email });
  if (user)
    return res.json({ message: "User Already exist ...!", success: false });

  const hashPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashPassword });
  res.json({ message: "User Created Successfully", success: true, user });
};


export const login = async (req, res) => {
    const {email, password} = req.body

    if (email == "" || password == "")
        return res.json({ message: "All field are required" });

    const user = await User.findOne({email});

    if(!user) return res.json({message: "User not exists", success: false})
    
    const validPassword = await bcrypt.compare(password, user.password)

    if(!validPassword) return res.json({message: "Invalid Password", success: false})

    const token = jwt.sign({userId:user._id},'!@#$%^&*()~', {
        expiresIn:'1d'
    } )
    
    res.json({message: `Welcome ${user.name}`, token, success: true })

};