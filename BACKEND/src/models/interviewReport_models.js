const mongoose = require("mongoose");

const interviewQuestionsSchema = new mongoose.Schema({
question: {
    type: String,
    required: [true, "Question is required"]
},
intention: {
    type: String,
    required: [true, "Intention is required"]
},
answer: {
    type: String,
    required: [true, "Answer is required"]
}
},
{_id: false

})

const behavioralQuestionsSchema = new mongoose.Schema({
question: {
    type: String,
    required: [true, "Question is required"]
},
intention: {
    type: String,
    required: [true, "Intention is required"]
},
answer: {
    type: String,
    required: [true, "Answer is required"]
}
},
{_id: false

})


const  skillsGapSchema = new mongoose.Schema({
skill: {
    type: String,
    required: [true, "Skill is required"]
},
severity: {
    type: String,
    required: [true, "Severity is required"]
}
},
{_id: false
})

const preparationSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    tasks: {
        type: String,
        required: [true, "Tasks is required"]
    }
});

const interviewReportSchema = new mongoose.Schema({
jobDescription: {
    type: String,
    required: [true, "Job description is required"]
},
resume: {
    type: String,
},
selfDescription: {
    type: String,
},
matchScore: {
    type: Number,
    min: 0,
    max: 100,
},

technicalQuestions: [interviewQuestionsSchema],
behavioralQuestions: [behavioralQuestionsSchema],
skillsGap: [skillsGapSchema],
preparation: [preparationSchema]

},
{ timestamps: true 

})


const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;
