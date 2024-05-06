function person (name){
    this.name=name;
}
person.prototype.greet=function(){console.log(this.name)};
person.prototype.age=21;
const personObj=new person("lucky")
personObj.greet()
console.log(personObj.age)