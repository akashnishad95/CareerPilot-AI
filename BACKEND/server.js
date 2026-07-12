require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./config/database');

const {resume, jobDescription, selfDescription} = require('./src/services/temp');
const {generateInterviewReport} = require('./src/services/ai_services');

connectDB();
generateInterviewReport({resume, jobDescription, selfDescription});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})