//apply n call

const person1={
    name:"one"
}
const person2={
    name:"two"
}

function greet(){
    console.log(`name is ${this?.name}`)

    return Array.isArray(this)? this?.reduce((acc,num)=>acc+num,0):""

}
const ar=[1,2,3]
// console.log(greet.call(person1))
// console.log(greet.call(ar))

//bind

const hold=greet.bind(person1)

console.log(">>>",hold())

