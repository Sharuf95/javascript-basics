// Http Server Module 
// NodeJS Inbuild Module (http)


const http = require('http');

// we can made server like this also with type one method
// const server = http.createServer(function (request,response) {
// response.writeHead(200);
// response.end("Data Derver from node server")
// });

// we can made server like this also with type two method
const requestListener = function (request,response) {
response.writeHead(200);
response.end("Data From Node Server")
}
const server = http.createServer(requestListener);


server.listen(80,'localhost',() => {
console.log("server is running")                    
});


// Browser -> localhost
// Terminal -> curl localhost
// server stop -> CTRL + C



console.log("-------------------------------CLASS NOTES-------------------------------")

/*

// HTTP Server Module
// NodeJS InBuild Module (http)


const http = require("http");

// const server = http.createServer(function (request, response) {
//   response.writeHead(200);
//   response.end("Data Serve from node server")
// });

const requestListener = function(request, response) {
  response.writeHead(200);
  response.end("Data from node server");
}

const server = http.createServer(requestListener);

server.listen(80, 'localhost', () => {
  console.log(`Server is running....`)
});


// Browser  -> localhost
// Terminal -> curl localhost

// Server STOP -> CTRL + C

*/