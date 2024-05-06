// console.log(typeof 42); //num
// console.log(typeof "Hello, world!"); //str
// console.log(typeof true); //bool
// console.log(typeof undefined); //und
// console.log(typeof null);  //obj
// console.log(typeof {});  //obj
// console.log(typeof []);  //obj
// console.log(typeof function(){}); //fun

// console.log(typeof 3.14); //num
// console.log(typeof NaN);  //num
// console.log(typeof Infinity);  //num
// console.log(typeof 10n); //bigint
// console.log(typeof 'Hello'); //str
// console.log(typeof Symbol('foo')); //symbol 
// console.log(typeof true); //bool
// console.log(typeof undefined); //und
// console.log(typeof null); //obj
// console.log(typeof {}); //obj
// console.log(typeof []); //obj
// console.log(typeof new Date()); //obj
// console.log(typeof /regex/); //obj
// console.log(typeof function(){}); // fn


console.log(typeof 1 / 0);//num
console.log(typeof '5' + 3); //str
console.log(typeof 1 + '2'); //str
console.log(typeof [] + []);//obj
console.log(typeof {} + {}); //obj
console.log(typeof undefined + undefined); //und
console.log(typeof NaN + NaN); //num