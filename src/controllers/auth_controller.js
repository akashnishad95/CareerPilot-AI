const  User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenblacklistModel = require('../models/blacklist_model');

/**
 * @name registerUserController
 * @desc Register a new user,expect Username, Email, and Password in the request body
 * @access Public
 */
async function registerUserController(req, res)  {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, Email, and Password are required' })
    } 
    const isUserAlreadyExists = await User.findOne({ $or: [{ username }, { email }] })
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'Account already exists with this Username or Email' })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ 
        username,
        email,
        password: hash })
        
    const token = jwt.sign(
        { id:user._id, username: user.username, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: '1d'}

    )
    res.cookie('token', token,)

    res.status(201).json({ message: 'User registered successfully', 
        user:
            { id: user._id, username: user.username, email: user.email },
    });


}
/**
 * @name loginUserController
 * @desc Login a user, expect Email and Password in the request body
 * access Public
 */
async function loginUserController (req, res) {
const { email, password } = req.body
const user = await User.findOne({ email })
if (!user) {
    return res.status(400).json({ message: 'Invalid Email or Password' })
}
const isPasswordValid = await bcrypt.compare(password, user.password)
if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid Email or Password' })
}
const token = jwt.sign(
    { id: user._id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
)
res.cookie('token', token)

res.status(200).json({ message: 'User logged in successfully',
user: { 
     id: user._id,
     username: user.username,
     email: user.email 
    },
 });
}
async function logoutUserController(req, res) {
    
    const token = req.cookies.token
    if (token) 
    {
        await tokenblacklistModel.create({ token })

        res.clearCookie("token")

        return res.status(200).json({ message: 'User logged out successfully' })
    }
}



module.exports = { registerUserController, loginUserController, logoutUserController }