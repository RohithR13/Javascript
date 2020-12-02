const person ={
    name:"Alex",
    cars:['ferrari','lambo'],
    toString: function(){
        //console.log(this.name+" has "+ this.cars)
        this.cars.forEach(car =>{
            console.log(this.name+ " has "+ car)
        })
    }

}

person.toString();