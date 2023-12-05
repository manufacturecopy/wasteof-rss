require('dotenv').config()
// to make web requests
const axios = require('axios');
// to get the token
const wasusername = process.env.USERNAME;
const waspassword = process.env.PASSWORD;

// the data to send to the wasteof api
const data = {
  "username": `${wasusername}`,
  "password": `${waspassword}`  
};

// sending to wasteof api
axios.post('https://api.wasteof.money/session', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
// done
console.log('Copy the token returned and put it into .ENV');