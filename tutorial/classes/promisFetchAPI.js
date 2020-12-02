const fetch =require("node-fetch")
const getRandomUsers =n => {
    const fetchRandomUsers = fetch('https://randomuser.me/api/?results=10')
    fetchRandomUsers.then(data =>{
        data.Json.then(randomUsers => {
            console.log(JSON.stringify(randomUsers));
        })
    }).catch(error=>{console.log(error)});
}

getRandomUsers(10)