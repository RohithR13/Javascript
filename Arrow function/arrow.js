//arrow function used as wrap details in as object 
let user = (name,city,age,)=>({name,city,age})

console.log(user("rohith","palakkad",23))
console.log(typeof(user("rohith","palakkad",23)))
let number = [10,21,50,31,97]
let evenNumber = number.filter(n=> n%2==0)
console.log(evenNumber)