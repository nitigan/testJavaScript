function criticalCode(){
    throw "throwing an exception"
}

function logError(theException){
    console.log(theException)
}

//try catch
console.log("\n*****Try...Catch****\n")

try{
    criticalCode()
}catch(ex){
    console.log("Got an error")
    logError(ex)
}


console.log("\n*****Throwing in Try...Catch****\n")

try {
    throw "An exception that is thrown every time"
}catch(ex){
    console.log("Got an Error")
    logError(ex)
}


console.log("\n*****Try...Catch.. Finally****\n")
cd;  // err and Program Exit : don't coding program in this error


try{
    //criticalCode()
    let x = 0  // test don't error
    //x; // test for err : x is not defined
}catch(ex){
    console.log("Got an error")
    logError(ex)
}finally{
    console.log("Code that always will run")
}
function hello(){
    console.log("*********Throwing Exceptions*************")
}
