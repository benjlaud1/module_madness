var http = require('http');
var convert = require('./convert');
var output = require('./output');
var random = require('./random');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(output.accountBalance());
  res.end();
}).listen(3000); // end createServer
