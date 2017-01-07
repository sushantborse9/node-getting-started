var fs = require('fs');
function canHandleRequest(req){
    return req.url.startsWith('/static/')
        || req.url.startsWith('/favicon.ico');
}
exports.canHandleRequest = canHandleRequest;
function serveStaticContent(req,res) {
    var url = req.url.substr(1);
    if(url === 'favicon.ico')
    {
        url = 'static/favicon.ico';
    }
    fs.readFile(url, (err, data) => {
        if (err) {
            console.log('Error: File not found', err);
            res.statusCode = 404;
            res.end();
            return;
        }
        res.end(data);
    });
}
//single module export way
//module.exports=serveStaticContent;
//multiple module export way
exports.serveStaticContent = serveStaticContent;