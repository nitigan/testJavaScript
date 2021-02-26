function capToFront(message){
    let text = ""
    for(let x of message.split('')){
        if(x === x.toUpperCase())
            text += x
    }

    for(let x of message.split('')){
        if(x === x.toLowerCase())
            text += x
    }


    return text
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))

/* 
function capToFront(text){
    let upper = ""
    let lower = ""
    let temp = text.split('');
    for(let char of temp){
        if(char == char.toUpperCase()){
            upper += char
        }
        //if(char == char.toLowerCase()){
        else{
            lower += char
        }    
        //}
    }
    return upper+lower
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE")) 
*/