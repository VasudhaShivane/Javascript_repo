const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//nullish operator
let val1;
val1 = 5 ?? 10

console.log(val1)

const icetea = 140
icetea >= 80 ? console.log("greater than 80 ") :console.log("greater than 80")