const {GoogleGenAI}= require("@google/genai");
const {z} = require("zod");
const {zodToJsonSchema} = require("zod-to-json-schema");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY

});

const interviewReportSchema = z.object({
    matchScore: z.number().describe("The percentage match between the candidate's resume and the job description."),

    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question asked during the interview."),
        intention: z.string().describe("The purpose or goal of the question."),
        answer: z.string().describe("How to answer the question effectively, including key points to cover."),
    
    })).describe("A list of technical questions, their intentions, and suggested answers."),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question asked during the interview."),
        intention: z.string().describe("The purpose or goal of the question."),
        answer: z.string().describe("How to answer the question effectively, including key points to cover."),
    })).describe("A list of behavioral questions, their intentions, and suggested answers."),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The specific skill or knowledge area where the candidate may have a gap."),
      severity: z.enum(["low", "medium", "high"]).describe("The severity of the skill gap, indicating how critical it is for the role."),
    })).describe("A list of skill gaps identified during the interview, along with their severity levels."),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan."),
        focus: z.string().describe("The specific area or skill to focus on for that day."),
        tasks: z.array(z.string()).describe("A list of tasks or activities to complete for that day's focus area."),
    })).describe("A Day-wise preparation plan for the candidate to improve their skills and readiness for the role."),
})

    

async function generateInterviewReport({resume, jobDescription, selfDescription}) {
  const prompt = `
You are an expert career coach and interviewer. Based on the following resume, job description, and self-description, generate a comprehensive interview report. The report should include a match score, technical and behavioral questions with their intentions and suggested answers, identified skill gaps with severity levels, and a day-wise preparation plan for the candidate.

Resume:
${resume}

Job Description:
${jobDescription}

Self-Description:
${selfDescription}`

 const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents:prompt,
    config:{
        responseMimeType:"application/json",
        responseSchema: zodToJsonSchema(interviewReportSchema),

    }

 })
return response.parsed
 //return JSON.parse(response.text)

}




module.exports ={ generateInterviewReport };