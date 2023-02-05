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

const chatText = document.querySelector('.chat-input');

chatText.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

runCompletion();

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}

function getInput () {
  var input = document.getElementById("userInput").value;
  alert(input);

  getResponse(input); 
}
function getResponse(input){
  var list = $('definition');
  if (input === "word"){
    list.append("a speech sound or series of speech sounds that symbolizes and communicates a meaning usually without being divisible into smaller units capable of independent use");
  }
  if (input === "LOL"){
    list.append("laugh out loud; laughing out loud");
  }
  else {
    list.append("that def doesn't exist"); 
  }
}