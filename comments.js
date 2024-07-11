// Create web server
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./index.html').pipe(response);
}).listen(8080);
console.log('Server running at http://localhost:8080/');