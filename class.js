class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greet(){
        console.log(`name of person is ${this.name} and whose age is ${this.age}`)
    }
}

const person1=new person("lucky",27)
const person2=new person("meet",18)

console.log(person1.name)
console.log(person2.age)
person1.greet()
person2.greet()