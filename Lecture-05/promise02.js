function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms) // ทดสอบ long operation
        //setTimeout(reject,ms)
    })
}

//console.log('Start')
promiseTimeout(2000)
    .then(()=>{  // resolve ทำงานสำเร็จ
        console.log("Done!!")
        return promiseTimeout(3000) // มี long operation อันอื่น ที่ทำงานอีก
    })
    .then(()=>{
        console.log("Also Done!!!")
    })

    .catch(()=>{ //reject  ทำงานไม่สำเร็จ
        console.log("Error!!")
    })
//console.log('End') //จะทำงานก่อน เพราะส่วนของ long operation จะส่งผลลัพธ์ เมื่อทำงานสำเร็จ