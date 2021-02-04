function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}

async function run(){
    //logic
    console.log("Start!!!")
    //try take of await and compare
    //await promiseTimeout(2000) // ให้รอ การทำงาน 2sec
    promiseTimeout(2000)  // ให้ทำงานเลย ไม่ต้องรอ
    console.log("Stop!!")
}

console.log("Before Run")
run()
console.log("After Run")