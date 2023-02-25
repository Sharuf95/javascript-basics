const express = require("express");
const app = express ();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const USER_POINT = "/user"

// To get list of all users
app.get(USER_POINT,(request,response) => {
response.json({success : true, method:"get"})                   
});

// To create a new user in application 
app.post(USER_POINT,(request,response) => {
response.json({success : true , method :"post"})                   
})


// To update existing user based on user id 
app.put(`${USER_POINT}/:id`,(request,response) => {
const userId = request.params.id;
response.json({status : true ,id : userId, method :"put"}) 
});


// To delete existing user based on user id 
app.delete(`${USER_POINT}/:id`,(request,response) => {
const USERID = request.params.id;
response.json({ status : true, id : USERID, method : "delete"})
});

app.listen(2000,() => {
console.log("server running on http://localhost:2000")                   
});





console.log("---------------------------------------CLASS NOTES---------------------------------------")