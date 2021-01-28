const person = {
    name  : 'Nitigan',
    weight:99
}

function sayHello(){
    console.log("Hello World - Prachin")
}

function cube(x){
    return x*x*x;
}

const add = (a,b) => a+b;

const status = true

module.exports = {person, sayHello,cube,add,status}
//module.exports = {person, sayHello,cube,status} //don't export add