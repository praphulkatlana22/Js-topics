function square(x){
    return function(y){
        return x*y
    }
}

const resfn=square(2)
console.log(resfn(5));