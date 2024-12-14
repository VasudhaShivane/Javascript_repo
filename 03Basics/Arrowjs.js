const user = {
    username : "vasudha",
    age : 21,

    welcome_msg: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

// user.welcome_msg()
// console.log(this)

// function helo(){
//     console.log(this);
// }
// helo()



const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(10 , 2482734));
