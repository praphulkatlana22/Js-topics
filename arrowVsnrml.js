
normal("test")

console.log(arrow)

function normal(){
    console.log("arguments")
}

var arrow=()=>{
    console.log("arguments arrow")
}

//prototype will not work in arrow function as they dont have there this context