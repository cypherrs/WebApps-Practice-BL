const http = require('http');

http.createServer((req, res) => {
    res.end("Hello from server");
}).listen(3000);