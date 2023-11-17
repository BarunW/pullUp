const codeAi  = require("../controllerApi/codeAi");
const imageGenerate = require("../controllerApi/imageGeneration");
const textCompletion = require("../controllerApi/textCompletion");


async function routeHandler(req,res){
    try{

        if(req.method === 'GET' && req.url === '/'){
            return res.end('<h1>Hello :)</h1>')
        }
        
        let body = [];
        let requestBody='';

        req.on('data', (chunk) =>{
            body.push(chunk);
        })

        await req.on('data',async () =>{
            requestBody = Buffer.concat(body).toString();
        })
        
        if(req.method === 'POST' && req.url ==='/text-completion'){

            const {apiKey,prompt,maxToken} =  JSON.parse(requestBody);
            console.time()
            // console.log(prompt);
            // console.log(typeof(requestBody));
            const responseText = await textCompletion(apiKey,prompt,maxToken);
            console.timeEnd();
                
            res.writeHead(201,'ok');
            return res.end(responseText);
        }

        if(req.method === 'POST' && req.url ==='/image-generation'){
            const{apiKey,prompt} = JSON.parse(requestBody);
            const responseURL = await imageGenerate(apiKey,prompt);
            res.writeHead(201,'created');
            console.log(responseURL);
            return res.end(responseURL);
        }
        else if(req.method === 'POST' && req.url === '/code-AI'){
            const{apiKey,prompt,maxToken} = JSON.parse(requestBody);
            const response = await codeAi(apiKey,prompt,maxToken);
            res.writeHead(201,'created');
            return res.end(response);
        }
        else{
            res.writeHead(404,"not found");
            return res.end('<h1>Route Not Found (.><.)</h1>')
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = routeHandler;