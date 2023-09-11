const http = require("http");
const https = require("https");

const hostname = '0.0.0.0';
const port = 8081
const fs = require("fs");
const ssl = false;


http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("Hello world - Port " + port);
}).listen(port);

console.log("Listening on port: " + port);

