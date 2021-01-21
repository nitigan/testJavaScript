const book = {
    title : "1984",
    author : "George Orwell",
    isAvailable:false
}

const booksJSON = JSON.stringify(book)  // 1 Object to String JSON
//const booksJSON = JSON.stringify([book,book,book]) // Multi Object to String JSON
console.log(booksJSON)


let Obook = JSON.parse(booksJSON)  // String JSON to Object
//console.log(Obook.title)
console.log(Obook)