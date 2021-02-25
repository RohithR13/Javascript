
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};

console.log(findMissingLetter("abcdf"))




// new array
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)

  for(let i=1; i< array.length;i++){
  if(first + i !==array[i].charCodeAt(0)){
      return String.fromCharCode(first + i)
  }
 
  }
  throw new Error("Invalid input")

}

console.log(findMissingLetter(['a','b','c','e'])