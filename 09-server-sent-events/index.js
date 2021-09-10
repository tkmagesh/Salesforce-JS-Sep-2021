var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url === '/' || req.url === '/index.html'){
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/stream'){
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        res.write('data: The server time is: ' + new Date() + '\n\n');
        var interval = setInterval(function() {
            res.write('data: The server time is: ' + new Date() + '\n\n');
        }, 1000);
        req.on('close', function() {
            clearInterval(interval);
        });
    }
})
server.listen(9090, () => {
    console.log('Server is running on port 9090');
});
