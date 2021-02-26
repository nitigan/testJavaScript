function removeDups(data){
    let newArr = [];
    data.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    });
    return newArr;
}
console.log(removeDups([1,0,1,0])) // [1,0]
console.log(removeDups(["The","big","cat"])) // ["The","big","cat"]
console.log(removeDups(["John","Taylor","John"] )) //["John","Taylor"]