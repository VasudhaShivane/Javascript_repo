const my = [1,2,3,4,5]

const total = my.reduce(function(acc , curr){
    console.log(`acc : ${acc} and curr : ${curr}`);
    return acc+curr;
},3)

console.log(total)