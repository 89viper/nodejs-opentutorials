var http = require('http');
var url = require('url');
var template = require('./lib/template.js');

var app = http.createServer(function (request, response) {
    var queryData = url.parse(request.url, true).query;
    var pathname = url.parse(request.url, true).pathname;

    template.readfile(template, request, response, queryData, pathname);
});
app.listen(1337);