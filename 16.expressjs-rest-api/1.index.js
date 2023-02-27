const express = require("express");
const app = express ();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const USER_POINT = "/user"

const Userlist = [];

// To get list of all users
app.get(USER_POINT,(request,response) => {
response.json({
success : true, 
method  :"get",
users   : Userlist})                   
});

// To create a new user in application 
app.post(USER_POINT,(request,response) => {
const requestedDATA = request.body;

const errors = [];

// const name = requestedDATA.name;
// const email = requestedDATA.email;
// const contact = requestedDATA.contact; we can write like this also 

const {name,email,contact} = requestedDATA

if(!name) {
errors.push(`Name is required`)
};

if(!email) {
errors.push(`Email address is required`)
};

if(!contact) {
errors.push(`Contact number is required`)
}

if(errors.length > 0) {
return response.json({
status : false,
errors : errors
})
}

const newuser = {
name    : name,
email   : email,
contact : contact,
id      : Userlist.length + 1
}

Userlist.push(newuser)



response.json({
success : true ,
method  :"post",
data    : newuser 
})                   
})


// To update existing user based on user id 
app.put(`${USER_POINT}/:id`,(request,response) => {
const userID = request.params.id;
response.json({
status : true,
id     : userID,
method :"put"}) 
});


// To delete existing user based on user id 
app.delete(`${USER_POINT}/:id`,(request,response) => {
const userID = request.params.id;

// check if user is available or not
const user = Userlist.find( (user) => {user.id === +userID})



if(!user) {
return response.json({
 Status : false,
message : `User Not found with Id ${userID}`                   
})
}

// Array.splice(INDEX,LENGTH)
const UserIndex = Userlist.findIndex( (user) => {user.id === +userID})
Userlist.splice(UserIndex,2)



response.json({
status : true,
id     : userID,
method : "delete",
index  :  UserIndex})
});

app.listen(2001,() => {
console.log("server running on http://localhost:2001")                   
});





console.log("---------------------------------------PRACTICE---------------------------------------");

/*

const express    = require("express");
const app        = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json())




const USER_POINT = "/user"

const userList = [];




// To get list of all users
app.get(USER_POINT,(request,response) => {
response.json({
success : true, 
method  :"get",
users   : userList})                   
});

// To create a new user in application 
app.post(USER_POINT,(request,response) => {
const requestedData = request.body;

const errors = [];


const {name,email,contact} = requestedData;

if(!name) {
errors.push(`Name is Required`);
}

if(!email){
errors.push(`email is required`)
}

if(!contact){
errors.push(`Contact is required`)
}

if(errors.length > 0) {
response.json({
status : false,
errors : errors          
})
}


const newuser = {
name    : name,
email   : email,
contact : contact,
id      : userList.length + 1
}


userList.push(newuser)

response.json({
success : true ,
method  :"post",
data    : newuser
})                   
})




// To update existing user based on user id 
app.put(`${USER_POINT}/:id`,(request,response) => {
const userId = request.params.id;
response.json({
status : true,
id     : userId,
method :"put"}) 
});


// To delete existing user based on user id 
app.delete(`${USER_POINT}/:id`,(request,response) => {
const USERID = request.params.id;

const User = userList.find((User) => {User.id === +USERID})
if(!User){
return response.json({
status  : false,
message : `User not found with Id ${USERID}`                
})
}

const Userindex = userList.findIndex( (User) => {User.id === +USERID })
userList.splice(Userindex,3)

response.json({
status : true,
id     : USERID,
method : "delete",
Index  : Userindex
})
});

app.listen(2001,() => {
console.log("server running on http://localhost:2001")                   
});

*/





console.log("---------------------------------------CLASS_NOTES---------------------------------------");

/*

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const USER_ENDPOINT = "/user"

const usersList = [
  {
    "name": "Koti",
    "email": "Koti@gmail.com",
    "contact": "5678906766",
    "id": 1
  },
  {
    "name": "Syed Zakeer Hussain",
    "email": "zakeer@zakeer.me",
    "contact": "98765410",
    "id": 2
  },
  {
    "name": "Jaleel",
    "email": "Jaleel@gmail.com",
    "contact": "6756786799",
    "id": 3
  }
];


// To get list of all users 
app.get(USER_ENDPOINT, (req, res) => {
  res.json({
    success: true,
    method: "get",
    users: usersList
  })
});

// To create a new user in application
app.post(USER_ENDPOINT, (req, res) => {
  const requestData = req.body;

  // const name = requestData.name;
  // const email = requestData.email;
  // const contact = requestData.contact;
  const { name, email, contact } = requestData;

  const errors = [];

  if (!email) {
    errors.push(`Email address is required`);
  }

  if (!name) {
    errors.push(`Name is required`);
  }

  if (!contact) {
    errors.push(`Contact number is required`);
  }

  if (errors.length > 0) {
    return res.json({
      status: false,
      errors: errors
    })
  }

  const newUser = {
    name: name,
    email: email,
    contact: contact,
    id: usersList.length + 1
  }

  usersList.push(newUser)

  res.json({
    status: true,
    methed: "POST",
    data: newUser
  })
});

// To update existing user based on user id
app.put(`${USER_ENDPOINT}/:id`, (req, res) => {
  const userID = req.params.id;
  res.json({ status: true, id: userID, method: "put" })
});

// To delete existing user based on user id 
app.delete(`${USER_ENDPOINT}/:id`, (req, res) => {
  const userID = req.params.id;

  // Check is user is available or not
  const user = usersList.find((user) => user.id === +userID);

  if (!user) {
    return res.json({
      status: false,
      message: `User not found with id ${userID}`
    })
  }

  // Array.splice(INDEX, LENGTH);
  const userIdx = usersList.findIndex( (user) => user.id === +userID )
  usersList.splice(userIdx, 1)

  res.json({
    status: true,
    id: userID,
    index: userIdx,
    method: "delete"
  })
});


app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
});

*/
