function solution(str){
    let result = []

    if (str.length%2==0){
      a= ''
        for(i=0;i<= str.length; i++){
            a+=str[i]
            if(i%2==1 ){
                result.push(a)
                a= ''
            }

        }
        return result
    }
    else{
        a= ''
        for(i=0;i< str.length; i++){
            a+=str[i]
            if(i%2==1 ){
                result.push(a)
                a= ''
            }
            else if( i ==str.length-1){
                result.push(str[i]+"_")
            }

        }
        return result

    }
}

console.log(solution("abcdefg"))


/*
code war
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

*/
           