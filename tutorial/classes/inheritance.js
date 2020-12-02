class Animal{
    constructor(name,age){
        console.log(name+"is an animal and was created")
        this.name =name;
        this.age = age;
    }
    eat(){
        console.log(this.name+ "is eating")
    }
    sleep(){
        console.log(this.name+" is sleeping")
    }
    logage(){
        console.log(this.name+" is "+this.age+" old")
    }
}


class dog extends Animal{
    constructor(name,age,breed){
        
        super(name,age)
        this.breed = breed;
    }
    dogBreed(){
        console.log(this.breed+" Breed of dog");
    }
}

const bobby = new Animal("bobby",5)
bobby.eat()
bobby.logage()

const mike =new dog("mike",5,"bulldog")
mike.eat()
mike.sleep()
mike.dogBreed()
mike.logage()


