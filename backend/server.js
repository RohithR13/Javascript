const http = require('http');
const users =[{"name":"rohith",
"age" :23},{"name":"raj","age":24}]
const server =http.createServer(function(request,response){
    if(request.url=="/"){
        response.setHeader('content-type','text/html')
        response.end('<h2> this the server giving information of user</h2>')
    }
    else if(request.url=="/users"){
        response.setHeader('content-type','text/javascript')
        response.end(JSON.stringify(users))


    }
    else{
        response.setHeader('content-type','text/html')
        response.end('<h2> page not found</h2>')

    }
});
console.log(server)
server.listen(3000,function(){
    console.log('server listening listening on port 3000')
})