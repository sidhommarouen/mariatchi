#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to mariatchi-dev\n');
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

