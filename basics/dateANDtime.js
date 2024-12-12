let myDate = new Date()
console.log(myDate);

console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

let myDatecreated = new Date(2024 , 0 , 23)
console.log(myDatecreated);
console.log(myDatecreated.toDateString())


let myTimestamp = Date.now()
console.log(myTimestamp)

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());

newdate.toLocaleDateString('default' ,{
    weekday : "long",
})