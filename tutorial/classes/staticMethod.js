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
   static iAmstaticMehod(){
       console.log("i am a static method from the class animal");
   }
}
Animal.iAmstaticMehod();
const bobby = new Animal("bobby",5)
bobby.eat()
bobby.logage()
