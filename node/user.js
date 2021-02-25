const axios = require('axios')
const url = "https://jsonplaceholder.typicode.com/users"
var a = new Object() 
axios.get(url).then(function(response){
    

    
     for( x in response.data){

         console.log( `${response.data[x].name} username is ${response.data[x].username}`)
     }

})

console.log(a)