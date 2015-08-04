/// <reference path="typings/node/node.d.ts"/>
var http = require('http');
var url = require('url');
var port = process.argv[2];

function padTime(time) {
    return time <= 9 ? '0' + time : time;
}

var server = http.createServer(function (request, response) {
    var parsed = url.parse(request.url, true);
    if (parsed.pathname == '/api/parsetime') {
        var date = new Date(parsed.query.iso);
        var formattedTime = {
            'hour': padTime(date.getHours()),
            'minute': padTime(date.getMinutes()),
            'second': padTime(date.getSeconds())
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(formattedTime));
        response.end();
    }
    
    if (parsed.pathname == '/api/unixtime') {
        var date = new Date(parsed.query.iso);
        var unixTime = {
            'unixtime': date.getTime()
        };
        
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(unixTime));
        response.end();
    }
    
});

server.listen(port);