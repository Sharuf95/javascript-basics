const http = require("http");
const fs = require("fs");

const categories = fs.readFileSync("data/categories.json") // buffer data
const products   = fs.readFileSync("data/products.json") // buffer data array kinda radu

function serverListener(request,response) {
console.log(`server requested url`,request.url);

const Requested_URL = request.url;

if(Requested_URL === "/products") { // products untaye
response.end(products)
}else if(Requested_URL === "/categories") { // categories untaye
response.end(categories)
}else{
 if(Requested_URL.includes("/products/")) { // okavela products lo /products/ ani ila untaye 
  // INCLUDES antaye ikada unna text lo shaik anay value unda leda check cheyadaniki includes use chestham
  // split yapudu string paina apply cheyali
const path = Requested_URL.split("/"); // output lo server requested url : product/5 ani kakuknda 
// oka variable create chesam variable => path 
// /products/5 => ["","product","5"]..split means /products/5 after split ("/") bar split avthundi

const productID = path[path.length -1];
console.log(`Products Id`,productID);
const productsList = JSON.parse(products); // ("data/products.json") => buffer data array kinda radu
// anduke malli array kinda ki change chesthunam,kabati products ni array kinda convert cheyali
const product = productsList.find(product => product.id === +productID);
// product.id == productid

if (product) { // product untaye nay manam response stringify chesi pampisthunam
response.end(JSON.stringify(product)) // now here productId is String                 
}else{
response.end(`No product found`)                    
}
 }else{response.writeHead(404);
 response.end(`Response not found please select /categories or /products`)          }
}
};

const server = http.createServer(serverListener)                   
const PORT = 801;
const HOST = "localhost"

server.listen(PORT,HOST,() => {
console.log(`project server running on //http://${HOST}:${PORT}`)                  
})




// string to Number
// 1.Number.parseInt("3"); // 3
// 2.parseInt("3"); // 3
// 3.+"3"; // 3
// JSON.parse     => string -> object/array
// JSON.stringify => object/array -> string  
// To Stop server use CTRL + C

console.log("---------------------------------------PRACTICE MODE---------------------------------------")

/*
const categories = fs.readFileSync("data/categories.json")
const products = fs.readFileSync ("data/products.json")

function serverListener(request,response) {
console.log(`Server requested Url`,request.url)
};


const Requested_Url = request.url

if(Requested_Url === "/products"){
response.end(products)
}else {if(Requested_Url === "/categories") {
response.end(categories)
}else{
if (Requested_Url === includes("/products")) {
const path = Requested_Url.split("/");
const productID = path[path.length-1 ];
console.log(`Product id`,productID)
const productlist = JSON.parse(products)
const products = productlist.find(product => product.id === productID )
} 
if (products) {
response.end(JSON.stringify(products))
}else{
response.end(`No product found`)
}{response.writeHead(404)};
response.end(`response not found please select /categories/ or /products`)               
}
}
const server = createServer()
const PORT = 802;
const HOST = "localhost";

server.listen(PORT,HOST,() => {
console.log(`Server is running on //http:// ${HOST}:${PORT}`)                    
})

*/


console.log("----------------------------------------CLASS_NOTES-----------------------------------------")




/*

const http = require('http');
const fs = require('fs');

const categories = fs.readFileSync('data/categories.json'); // Buffer Data
const products = fs.readFileSync('data/products.json'); // Buffer Data



// /categories  => CATEGORIES_DATA
// /products    => PRODUCTS_DATA

function serverListener(request, response) {
  console.log(`Server Requested URL: `, request.url);

  const REQUESTED_URL = request.url;

  if (REQUESTED_URL === "/products") {
    response.end(products);
  } else if (REQUESTED_URL === "/categories") {
    response.end(categories);
  } else {
    if (REQUESTED_URL.includes("/products/")) {
      // /products/5 => ["", "product", "5"]
      const paths = REQUESTED_URL.split("/"); // ["", "product", "5"]
      const productId = paths[paths.length - 1];
      console.log("Product ID:", productId);
      const productsList = JSON.parse(products);
      // Here productId is string
      // product.id == productId

      // String to Number
      // 1. Number.parseInt("3"); // 3
      // 2. parseInt("3"); // 3
      // 3. +"3"; // 3

      // JSON.parse     => string -> object/array
      // JSON.stringify => object/array -> string  

      const product = productsList.find(product => product.id === productId);

      if(product) {
        response.end(JSON.stringify(product))
      } else {
        response.end("No Product found...")
      }
      
    } else {
      response.writeHead(404);
      response.end(`Resource not found. Please try with /categories or /products or /products/{PRODUCT_ID}`)
    }
  }

};


const server = http.createServer(serverListener);
const PORT = 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Project Server running on http://${HOST}:${PORT}`);
});


// To Stop server use CTRL + C

*/

















