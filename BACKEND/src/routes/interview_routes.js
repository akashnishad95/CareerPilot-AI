const express = require('express');
const auhtMiddleware = require('../middlewares/auth_middleware');

const interviewController = require('../controllers/interview_controller');

const upload=require('../middlewares/file_middleware');

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description Generate an interview report based on the provided resume, job description, and self-description.
 * @access Private
 */
interviewRouter.post('/', auhtMiddleware.authUser,upload.single('resume'), interviewController.generateInterviewReportController);

module.exports = interviewRouter;