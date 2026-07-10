const {GoogleGenAI}= require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY

});

async function invokeGeminiAi(){
    const response = await ai.models.generateContent({
        model:"gemini-3.1-flash-lite",
        contents:"Hello, Gemini AI! Expalin what is interview?"
})

console.log(response.text)

}
module.exports = invokeGeminiAi;