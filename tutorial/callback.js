//callback

function callbackExample(name, callback){
    console.log(callback(name));

}

callbackExample("Rohith",function(name){
    return "hello "+name;
});