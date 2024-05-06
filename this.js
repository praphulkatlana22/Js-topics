const obj={
    name:"lucky",
    greet:function(){
        console.log(this)
    }
}
obj.greet()

const obj2={
    name:"lucky",
    greet:()=>{
        console.log(this)
    }
}
obj2.greet()