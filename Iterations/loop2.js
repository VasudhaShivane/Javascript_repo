const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
})

console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.filter((nums) => nums > 4)
console.log(newnums)

const nnum = nums.filter( (nums) =>{
    return nums>4
})
console.log(nnum);