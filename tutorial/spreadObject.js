const address ={
    city: 'LA',
    country: 'USA',
    postcode: 'LA44'
}
const name = {
    firstName: 'Andy',
    lastName: 'Jones'
};

const person ={...address,...name}
console.log(person)