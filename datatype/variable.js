//var a=2;

//let local variable
//console.log(a);
let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(a); // undefined console.log(window.a);
console.log(b); // 'world'console.log(window.b);
//var a = 'hello';

//var a = 'world'; // No problem, 'hello' is replaced.
//let b = 'hello';
//let b = 'world'; // SyntaxError: Identifier 'b' has already been declared
//using let the variable can be declared only once but the value of the variable can be changed to anything

// using var the variable can be allowed to be declared multiple times and the value of the varibale can also be changed