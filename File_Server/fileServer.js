var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileLoc = process.argv[3];

var server = http.createServer(function (request, response) {
  var fileStream = fs.createReadStream(fileLoc);
  fileStream.setEncoding('utf8');
  fileStream.pipe(response);
});

server.listen(port);
