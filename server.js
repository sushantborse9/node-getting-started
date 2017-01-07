var http = require('http');
//property fetch way
/*var serveStaticContent = require('./static.js').serveStaticContent;
var canHandleRequest = require('./static.js').canHandleRequest;*/
var static = require('./static.js');

http.createServer(function (req,res) {
    debugger;
    console.log('Incoming request:',req.url);
    if(static.canHandleRequest(req)){
        static.serveStaticContent(req,res);
        return;
    }
    res.end('Hello World!');
}).listen(3000,"127.0.0.1",() => {
    console.log('Server started');
});