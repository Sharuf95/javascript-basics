const http = require("http")
const server = http.createServer((request,response) => {
                                 
const names = [
   "Shaik",
   "Sharuf",
   "Sharu"                 
]
const ConvertingNamesIntoString = JSON.stringify(names)
response.writeHead(300)
response.end(ConvertingNamesIntoString)

// JSON.parse     => It convert your 'string' into object/array into original object/array
// JSON.stringify => It convert your 'object/ array' instance into plain string
})
server.listen(82,"localhost",() =>{
console.log("Server is running on http://localhost:82")
})

// To stop server use CTRL + C





/*
practice mode
const http = require("http");
const serverr = http.createServer((request,response) => {
response.writeHead(302)
response.end("Data from node to server")
})

server.listen(85,"localhost",() => {
  console.log("Server in running in background");                  
})
*/