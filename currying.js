function cury(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

let res=cury(2)(2)(2)
console.log(res)