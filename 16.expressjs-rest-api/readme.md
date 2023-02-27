### **ExpressJS Rest APIs**

#### **Introduction to REST APIs**
Rest ( Representation State Transfer ) APIs are a Standard for building web APIs
Rest APIs use HTTP METHODS
- **GET**
- **POST**
- **PUT**
- **DELETE**

to interact with resources represented by URIs( Uniform Resource Identifiers)

REST APIs can return data in different formats 
- **JSON** 
- **XML** 
- **HTML** 
- **ByteArray** 

But JSON ( Javascript Object Notation )
 is the most common format.


#### **Instructions**

1.Intialize Project for Node Environment  
```
npm init 
```

2.Install Express package 
```
npm install express
```

3.To Handle  JSON Request/ Response install body-parse library
```
npm install body-parser
```

_In Express.js,you can handle JSON payload in you API by adding the `body-parser` middleware to your application.**The `body-parser` middleware allows you to parse JSON data in the request body**_

4.Create Express Application
```Javascript
const express = require("express");
const app     = express();
```
5.Apply `body-parser` middleware to express app.
 ```Javascript
 const bodyparser = require("body-parser");
 app.use(bodyParser.json())
```

6.Create/Listen Server on specific PORT
```Javascript
const SERVER_PORT = 2000;
const ONServerStart = function() {
console.log(`Server running on http//:localhost:${SERVER_PORT}`)
}
app.listen(SERVER_PORT,ONServerStart)
```

### Routing IN ExpressJS
Route is a specific endpoint in your application that defines the behaviour for a particular URL.You can define routes using the `app.get()`method,which is used to handle HTTP GET requests
```javascript
app.get("/",(request,response) => {
response.send("hello World")
});
```

- **GET** Request
```Javascript
const API_ENDPOINT = "/";
const apiHandler   = (request,response) => {
response.json({success:true})
}
app.get(API_ENDPOINT,apiHandler)
```

- **POST** Request
```Javascript
const USER_ENDPOINT = "/users";
app.post(USER_ENDPOINT,function(request,response) {
});
```

- **PUT** Request
```Javascript
const USER_ENDPOINT = "/users/:userId"; // userId is request param
app.put(USER_ENDPOINT,function(request,response) {
const USERID = request.params.userId
});
```

- **DELETE** Request
```Javascript
const USER_ENDPOINT = "/users/:id"; // userId is request param
app.delete( USER_ENDPOINT,function () {
 const userID = request.params.Id                   
})
```


### CRUD Operations on Users 

1.**C**reate (Create a new user through **POST** API).
2.**R**ead (Get user details through **GET** API).
3.**U**pdate (Update user details through **PUT** API).
4.**D**elete (Remove user from the system through **DELETE** API).









