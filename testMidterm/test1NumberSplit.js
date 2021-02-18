function numberSplit(num){
    let num1 = Math.ceil(num / 2)
    let num2 = num - num1 
    if(num1 > num2){
        return [num2,num1]
    }else{
        return [num1,num2]
    }
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))


/*
function numberSplit(num)
    return [Math.floor(num/2),Math.ceil(num/2)]
*/