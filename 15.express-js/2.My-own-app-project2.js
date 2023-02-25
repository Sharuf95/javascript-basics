const fs = require ('fs');
const express = require('express');
const app = express()

function getfiledata(path) {
const data = fs.readFileSync(path) // buffer data
const json = JSON.parse(data) 
return json        
}

const DATA_FOLDER = "../14.node-server/data"
const products = getfiledata(`${DATA_FOLDER}/products.json`)
const categories = getfiledata(`${ DATA_FOLDER}/categories.json`)

app.get("/products",(request,response) => {
response.json( products)
})

app.get("/categories",(request,response) => {
response.json(categories)
});

app.get ("/products/:PRODUCTID",(request,response) => {
  const productId = request.params.PRODUCTID;
  const product = products.find( product => product.id === parseInt( productId))
    
  
  if (!product) {
 response.json({
    error   : true,
    message : `No product found on ${productId}`              
 })
  }else{
    response.send(product)                
  }
})

app.listen(3002,() => {
console.log(`Server is running On http//:localhost:3002`)                    
})