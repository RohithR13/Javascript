class Animal{
    constructor(name,age){
        console.log(name+"is an animal and was created")
        this.name =name;
        this.age =age;
    }
    eat(){
        console.log(this.name+ "is eating")
    }
    sleep(){
        console.log(this.name+" is sleeping")
    }
    logage(){
        console.log(this.age+ " years old")
    }
}


const bobby = new Animal("bobby",2);
bobby.eat();
bobby.sleep()
bobby.age();

console.log("----------------------------------------------------------------------------------------------------")

class Application{
    constructor(name,ver){
        console.log(name+ " is a software and was created")
        this.name =name;
        this.ver = ver
    }
    scan(){
        console.log(this.name+"is scanning")
    }
    print(){
        console.log(this.name+"is printing")
    }
    version(){
        console.log(this.ver+ " is the version of"+this.name)
    }
}

const app =new Application("app",2.0);
app.print();
app.scan();
app.version()
