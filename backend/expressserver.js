const express = require('express')
const app = express()
const port = 3000;
app.get('/', function (request,response){
    response.send('<h2> welcome to the website</h2>')
});
app.get('/users',function(request,response){
    response.send([{"name":"rohith",
    "age" :23},{"name":"raj","age":24}])
})
app.listen(port, function(){
    console.log('server listening on port,30000')
})