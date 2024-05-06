const ar=[1,2,3,4,5]

console.log(ar.slice(1,3))  //original same .... strt position to end, end exclude
console.log(ar.splice(1,3))  //original change... strt position and num of item

const array = ['a', 'b', 'c', 'd', 'e'];

const removedElements = array.splice(1, 3, 'x', 'y');
console.log(array); // Output: ['a', 'x', 'y', 'e']
console.log(removedElements); // Output: ['b', 'c', 'd']
