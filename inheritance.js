class Parent{
    constructor(){
        this.fatherName = "Abul";
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.name =name;
    }
    getfullname(){
        return this.fatherName + " " + this.name;
    }
}
const baby = new child("Arnold");
const baby2 = new child("Tom");

console.log(baby.getfullname());
console.log(baby2.getfullname());


