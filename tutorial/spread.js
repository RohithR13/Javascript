let arrayone = ["rohith","raj","ravi"];
let arraytwo =['ram','rajiv',]
let concatArray = [...arrayone,...arraytwo];//spread operator


concatArray.forEach(function(name){
    console.log(name)
})