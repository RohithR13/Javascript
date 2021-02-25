const axios = require('axios')
const url = "https://jsonplaceholder.typicode.com/users/1"
//console.log(axios)

axios.get(url).then(function(response){
    console.log(`my name is ${response.data.name} and username is  ${response.data.username}` )
})