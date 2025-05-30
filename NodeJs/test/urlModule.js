const url = require('url');

const parsedUrl = url.parse('http://example.com/path?name=Rishi');
console.log(parsedUrl.query); // name=Rishi
