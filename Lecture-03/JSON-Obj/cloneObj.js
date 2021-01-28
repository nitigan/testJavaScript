// Object clonning
// Obj REf, Obj Clonning assign(), {...x},JSON

const obj1 = {
    person : 'Nitigan',
    weight : 99
}

//const obj2 = obj1  // NOT CLONE : Create obj2 is obj1 = call obj1,2 is one
//const obj2 = Object.assign({},obj1) //Clone
const obj2 = {...obj1} //Clone
obj2.weight = 88 
console.log(obj1)
console.log(obj2)