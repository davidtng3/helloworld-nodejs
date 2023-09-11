const http = require("http");
const https = require("https");

const hostname = '0.0.0.0';
const port = 8081
const fs = require("fs");
const ssl = true;
//const ssl = false;

// Creating object of key and certificate for SSL.
const options = {
  key: fs.readFileSync("certs/server.key"),
  cert: fs.readFileSync("certs/server.crt"),
};

if (ssl) {
  https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end("Hello world - Port " + port);
  }).listen(port);
} 
else { 
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Hello world - Port " + port);
  }).listen(port);
}

console.log("Listening on port: " + port);

