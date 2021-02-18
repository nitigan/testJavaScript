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