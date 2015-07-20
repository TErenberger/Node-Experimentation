var http = require('http');
var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket) {
  var dateString = '';
  var date = new Date();
  dateString += date.getFullYear() + '-';
  dateString += (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  dateString += '-' + date.getDate();
  dateString += ' ' + date.getHours() + ':';
  dateString += date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
  socket.end(dateString);
});

server.listen(port);
