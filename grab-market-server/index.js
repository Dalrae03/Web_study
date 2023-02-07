var http = require('http');
var hostname = '127.0.0.1'; //localhost와 동일
var port = 8080;

const server = http.createServer(function(req, res) {
    console.log("REQUEST : ", req);
    res.end("Hello Client!");
});

server.listen(port, hostname);

console.log("grab market server on!");