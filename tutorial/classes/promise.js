// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => 
//         resolve("data back from the server")

//     ,3);
//     setTimeout(() => 
//         reject("no data back from the server,there was an error")
//     ,20)
// })

// promise.then(response => {
//     console.log("hi")
// }).catch(error => {
//     log(error);
//} )
let p = new Promise ((resolve, reject) =>{
    let a=1+22
    if (a==2){
        resolve('succes')}
    else{
        reject('failed')
    }
    })
    p.then((message) => {
        console.log("this is in then "+message)
    }).catch((error) =>{
        console.log("this is in the catch "+error)
    })
let a = new Promise((resolve,reject)=>{item=>item>0?resolve('success'):reject('rejected')})

a.then((message) => {
    console.log("this is in then "+message)
}).catch((error) =>{
    console.log("this is in the catch "+error)