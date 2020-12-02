const getNumber =function*(){
    yield 1;
    yield "hello";
    yield true;
    yield { name: "Rohith"};

}
const numberGen =getNumber();
console.log(numberGen.next())
console.log(numberGen.next())
console.log(numberGen.next())