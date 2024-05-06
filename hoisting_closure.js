

console.log(test)
var test=1;
console.log(test)


//closure

function testfn(){
    var text="my text";
    return innerFn=()=>{console.log(text)}
}
const res=testfn()
console.log(res())