
const array = [234,78,10 ,23,100]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index]);
    
}

for (let i=1 ; i<= 10 ; i++){
    console.log(`outer loop value : ${i}`);
    for (let j=1 ; j<= 10 ; j++){

        //console.log(`inner loop value : ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}