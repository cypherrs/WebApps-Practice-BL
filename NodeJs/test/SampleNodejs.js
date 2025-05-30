const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('bigfile.txt', (err, data) => {
        if (err) return res.end("Error",setTimeout(3000));
        res.end(data);
    });

    console.log("Request received");
}).listen(3000);