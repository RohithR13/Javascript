//if loop
let a= false;

if (0){
    console.log("the condition is true")
}

//
let login =''
let message = (login == 'Employee')? 'hello':(login == 'Director')?'Greeting':(login=='')?'No login':''
console.log(message)


let hour = 9;
if(hour <10 || hour > 18){
    console.log(" the office is closed")
}