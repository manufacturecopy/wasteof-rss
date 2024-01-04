// to read token from env
require('dotenv').config()
// use axios to make web requests
const axios = require('axios');
// read the token from env
const token = process.env.TOKEN;
// for reading rss
const Parser = require('rss-parser');
const parser = new Parser();

// replace this with your rss feed
const feedUrl = 'https://news.ycombinator.com/rss'; 

parser.parseURL(feedUrl)
  .then((feed) => {
    // Access the first item in the feed
    const firstItem = feed.items[0];
    Item1 = firstItem.title;
    Item2 = firstItem.link;
    console.log(firstItem.title);
    console.log(firstItem.link);
    console.log(firstItem.description);
  })
  .catch((error) => {
    console.error('Error fetching or parsing the RSS feed:', error);
  });
    
// wait 2 seconds for the rss to finish and post 
setTimeout(function(){
    axios.get('https://api.wasteof.money/session', {
  headers: {
    'Authorization': `${token}`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

const data = {
	 // post the title and url of the rss feed
    post: `<p>${Item1}</p><p>${Item2}</p>`
};

// post the title and url of the rss feed to wasteof
axios.post('https://api.wasteof.money/posts', data, {
    headers: {
        'Authorization': `${token}`
      }
})
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

// log a success message
console.log('Posted');
}, 2000);
// the previous line is the wait 2 seconds part
