//singleton

//object literals
const user={
    name : "vasudha",
    "full name" : "Vasudha Shivane",
    age : 18,
    location : "Pune",
    email : "vgs@gmail.com",
    isLoggedin : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(user.name)
console.log(user.email)
console.log(user["full name"]);

user.email = "sdvs@gmail.com"
Object.freeze(user);
user.email = "abbb@gmail.com"
console.log(user);

user.greeting = function(){
    console.log("HELLO USER");
}

console.log(user.greeting);
