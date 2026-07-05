const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');


app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
}))



app.use('/api/auth', authRouter)


module.exports = app; 