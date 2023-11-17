
const request = require('request');
const url = 'http://www.azlyrics.com/lyrics/songtitle.html';

request(url, (error, response,html) =>{
    if(!error && response.statusCode === 200){
        
    }
})