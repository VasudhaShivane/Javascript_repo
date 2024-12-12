

const arr1 = [1 , 3,  2,  5,  7,  12,  19]

// console.log(arr1[0]);

const arr2 = new Array(3 , 4,  8 , 12 , 10 , 27  ,29)
// console.log(arr2[3]);

// arr2.push(7)
// console.log(arr2);
// arr2.pop()
// console.log(arr2);


arr2.unshift(90)
// console.log(arr2);
arr2.shift()
// console.log(arr2)

// console.log(arr2.includes(4))

// console.log("A " , arr2);

const my1  = arr2.slice(1 , 3);
// console.log(my1);
// console.log(arr2)

const my12 = arr2.splice(1 , 3);
console.log(my12);
console.log(arr2)