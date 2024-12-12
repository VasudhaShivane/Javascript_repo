function saymyname(){
    console.log("hi this is VGS");
}


//saymyname()

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2)
// }

// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2
//     return result
// }

// const result = addTwoNumbers(3,18)
// console.log("Result : ", result)


// function loginmsg(username) {
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginmsg("vasudha"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200 , 32847 , 1122, 2555))

const user = {
    username : "vvggss",
    price :  999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)

handleobject({
    username : "itsme",
    price : "1990"
})


const myarray = [200,  900 , 822 , 400 , 6000]

function returnsecondvalue(getarray){
    return getarray[2]
}
console.log(returnsecondvalue(myarray))