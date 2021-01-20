function createQuote(quote, callback){
    let myQuote = "Like I always say, " + quote
    
    //console.log(myQuote)
    callback(myQuote)
    console.log(myQuote)
}

function logQuote(quote){
    console.log(quote + ' Yes... ')
}

createQuote(" you will getting better! ", logQuote)