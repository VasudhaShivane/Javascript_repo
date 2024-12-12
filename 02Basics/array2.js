const myarray = ["thor" , "Ironman" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]

myarray.push(dc)

// console.log(myarray);

// myarray.concat(dc);
// console.log(myarray)

const allheros = myarray.concat(dc);
console.log(allheros);

const all_newz_heros = [...myarray, ...dc]
console.log(all_newz_heros);

console.log(Array.isArray("hiiii"));