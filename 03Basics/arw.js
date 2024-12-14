const user = {
    username : "vasudha",
    age : 21,

    welcome_msg: function(){
        console.log(`${this.username} , welcome to website`);
    
    }
}

user.welcome_msg()