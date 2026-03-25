const http = require('http');

http.createServer((req, res) => {
    res.end("Hello Server");
}).listen(3000);
