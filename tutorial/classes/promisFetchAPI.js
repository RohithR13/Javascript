const fetch =require("node-fetch")
const getRandomUsers = n => {
    const fetchRandomUsers = fetch('https://randomuser.me/api/?results=10')
    console.log(fetchRandomUsers)
  fetchRandomUsers.then(data =>{

        console.log(data.result)
        //  data.Json.then(randomUsers => {
        //      console.log(JSON.stringify(randomUsers));
        //  })
    }).catch(error=>{console.log(error)});
}

getRandomUsers(10)