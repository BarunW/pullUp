const buffer = require('node:buffer')

function bodyParser(req){
    let body = []
    req.on('data', (chunk) =>{
        body.push(chunk);
    })

    req.on('data',() =>{
        const requestBody = buffer.concat(body).toString();
    })

}