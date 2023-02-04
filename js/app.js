<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// Constant URL value for JAAS API
const RAPIDAPI_API_URL = 'you-chat-gpt.p.rapidapi.com';
// Object with RapidAPI authorization headers and Content-Type header
const RAPIDAPI_REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com'
    , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    , 'Content-Type': 'application/json'
};

const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://you-chat-gpt.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '8546de12a9mshefc6682d8a8a4b9p1c606ajsnab0c463f46fb',
    'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
  },
  data: '{"question":"Write python code to make inferences on a CNN model","max_response_time":30}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});