function removeDups(data){
    let result = [];
    
    data.forEach(element => {
       if(!result.includes(element)) result.push(element);
    });
    return result;
}

console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The","big","cat"]))
console.log(removeDups(["John","Taylor","John"]))