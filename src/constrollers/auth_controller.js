const  User = require('../models/user');
const bcrypt = require('bcryptjs');

/**
 * @name registerUserController
 * @desc Register a new user,expect Username, Email, and Password in the request body
 * @access Public
 */
async function registerUserController(req, res) {
    const { Username, Email, Password } = req.body;
    if (!Username || !Email || !Password) {
        return res.status(400).json({ message: 'Username, Email, and Password are required' });
    } 
    const isUseralreadyExists = await User.findOne({ $or: [{ Username }, { Email }] });
    if (isUseralreadyExists) {
        return res.status(400).json({ message: 'Account already exists with this Username or Email' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = new User({ 
        Username,
         Email,
          Password: hashedPassword });
    const token = jwt.sign(
        { id:newUser._id, Username: newUser.Username, Email: newUser.Email},
        process.env.JWT_SECRET,
        {expiresIn: '1d'}

    )
    res.cookie('token', token,)

    res.status(201).json({ message: 'User registered successfully', 
        user:
            { id: newUser._id, Username: newUser.Username, Email: newUser.Email },
    });


}
/**
 * @name loginUserController
 * @desc Login a user, expect Email and Password in the request body
 * access Public
 */
async function loginUserController(req, res) {
const { Email, Password } = req.body;
const user = await UserModel.findOne({ Email });
if (!user) {
    return res.status(400).json({ message: 'Invalid Email or Password' });
}
const isPasswordValid = await bcrypt.compare(Password, user.Password);
if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid Email or Password' });
}
const token = jwt.sign(
    { id: user._id, Username: user.Username, Email: user.Email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
);
res.cookie('token', token)

res.status(200).json({ message: 'User logged in successfully',
user: { id: user._id,
     Username: user.Username,
      Email: user.Email 
    },
 });
}



module.exports = {registerUserController, loginUserController};