const jwt = require('jsonwebtoken')

const tokenblacklistModel = require('../models/blacklist_model')

async function authUser(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: 'No token found in cookies' })
    }

    
    const isTokenBlacklisted = await tokenblacklistModel.findOne({ token })
    if (isTokenBlacklisted) {
        return res.status(401).json({ message: 'Token is invalid' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}


    module.exports = { authUser }