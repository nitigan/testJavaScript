function highestDigit(num){
    let hiDigit = 0
    let chkNum = 0
    while(num > 0 ){
        chkNum = num%10
        if(hiDigit < chkNum){
            hiDigit = chkNum
        }
        num = Math.floor(num /10)
        //console.log(num)
    }
    return hiDigit
}

console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))

/*
    function highestDigit(num){
        return Math.max(... num.toString().split(''));
    }
    function highestDigit(num){
        num.toString().split('')
        
        return max
    }
*/