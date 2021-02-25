const express =require('express');
const app = express();
const port = 3000
const users =[{
id:1,name:"rohith",place:"palakkad"},
{id:2,name:"lohith",place:"chandranagar"},
{id:3,name:"sharath",place:"bangalore"}]
console.log(app)
app.get("/",function(request, response){
    response.send("<h2>welcome to the website about user</h2>")
})
app.get("/users",function(request, response){
    response.send(users)
})
app.get("/users/:id",function(request, response){
    userId = request.params.id
    console.log(request.params.id)
    let user = users.find(function(user){
        return user.id ==userId
    })
    if(user){
        
        response.send(user)
    }
    else{
        response.send(`the user with user ID ${userId} is not found`)
    }
})

app.listen(port,function(){
    console.log("the server is running on port 3000")
})