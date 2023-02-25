const fs = require ('fs');
const express = require('express');
const app = express()

function getfiledata(path) { // buffer data
const data_folder = fs.readFileSync(path)
const json = JSON.parse(data_folder) 
return json
}

const data_file = "../14.node-server/data";
const products =  getfiledata(`${ data_file}/products.json`);
const categories =  getfiledata(`${data_file}/categories.json`);

//step 1
app.get("/",function(request,response) {
response.send(`Express server is running`)
});

// step 2
app.get("/products",function(request,response) {
response.json(products)
})

// step 3
app.get("/categories",function(request,response) {
response.json(categories)
})

app.get("/products/:productID",(request,response) => {
const productId = request.params.productID;
const product = products.find(product => product.id === parseInt(productId))

if(!product) {
response.json({
error : true ,
message : `No product found with ID ${productId}`                    
})
}else{
 response.send(product)                   
}
});
app.listen(3003,() => {
console.log(`Server is running On http//:localhost:3003`)
});



/*

const fs = require ("fs");
const express = require ('express');
const app = express();

function getfiledata(path) {
const data = fs.readFileSync(path)
const json = JSON.parse(data)
return json
}

const data_folder = "../14.node-server/data"
const products    =  getfiledata(`${data_folder}/products.json`);
const categories  =  getfiledata(`${data_folder}/categories.json`);


app.get("/",function(request,response){
 response.send(`Express is running on`)                  
});

app.get("/products",(request,response) => {
response.json(products)
})

app.get("/categories",(request,response) => {
response.json(categories)
})

app.get("/products/:ProductId",(request,response) => {
const productId = request.params.ProductId;
const product = products.find(product => product.id === parseInt(productId))


if(!product) {
response.json({
error   : true,
message : `No product found with Id ${productId}`                   
})
}else {
 response.send(product)                   
}
})

app.listen(3005,() => {
console.log(`Server is running on http://localhost:3005`)                    
})

*/
