function totalVolume(){
    //console.log(arguments.length)
    let arr = 0
    let total = 0;
    for(let i=0 ;i<arguments.length ; i++){
        let sum = 1
        arr =arguments[i]
        for(let j=0 ;j < arr.length ;j++){
            sum *= arr[j];
        }
        total += sum
    }
    return total
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalVolume([2,2,2],[2,1,1] ))
console.log(totalVolume([1,1,1] ))