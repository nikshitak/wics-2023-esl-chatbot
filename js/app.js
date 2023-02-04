// OPEN AI SECRET KEY: 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
// OPEN AI ORG KEY: org-cMgDaOdMDIIOJMmrLVjCH0U7

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await runCompletion();

async function runCompletion () {
const completion = await openai.createCompletion({
  model: "text-ada-001",
  prompt: "How are you today?",
});
console.log(response);
}

runCompletion();


