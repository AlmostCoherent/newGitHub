﻿var http = require("http");


http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Hello world!\n");
}).listen(8081);

console.log("Server running at http://192.0.0.1:8081");