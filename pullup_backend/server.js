const http = require('http')
const EventEmitter=  require('events')
const logEvent = require('./middleware/logEvents')
const routeHandler = require('./routes/handleRoutes')
const PORT = process.env.PORT || 8080

class Emitter extends EventEmitter{} 
const myEmitter = new Emitter();

myEmitter.on('logs',(message,filename) => logEvent(message,filename));
myEmitter.on('request',(request,response) => {
    routeHandler(request,response);
});
const server = http.createServer((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    myEmitter.emit('logs',`${req.url} ${req.method} ${req.headers.origin}`,'requestLogs.txt')
    myEmitter.emit('request',req, res);
   
})
server.listen(PORT,() =>{
    console.log('Listening',PORT);
})