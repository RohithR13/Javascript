function finder( str) {
    result = str.match("bomb")
    //console.log(result) 
    if(result!==null){
        return "duck"
    }
    else{
        return "There is no bomb,relax "
    }
}

let str1 =" i have  "
let str2 =" bomb is there"
console.log(finder(str1))
console.log(finder(str2))