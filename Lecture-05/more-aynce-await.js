function who(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("🤡");
        },200)
    })
}

function what(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Lurks")
        },300)
    })
}

function where(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("in the shadows")
        },500)
    })
}

async function msg(){
    //const a = await who() //-> 🤡
    //const b = await what() // ->Lurks
    //const c = await where() // ->
    const a = who() // ->  [object Promise]
    const b = await what() // ->Lurks
    const c = await where() // -> in the shadows

    console.log(`${a} ${b} ${c}`)
}
console.log('We are looking for :')
msg() //🤡  lurk in the shadows <-- after 1 second
console.log('Hello')