const blank = {}
//console.log("Blank type:",typeof blank)
//console.log("Blank value",blank)


/*
const book = {
    title : "1984",
    author : "George Orwell",
    isAvailable : false,
    checkIn : function(){
        this.isAvailable = true
    },
    checkOut :function(){
        this.isAvailable = false
    }
}
*/

/*
console.log("Blank type:",typeof blank)
//book.checkIn();
book.checkOut();
console.log("Blank value:\n",book)
*/


//const book = new Object() // create new object
/*
const data = {title:"1984",authoe:"George Orwell"} // create template Object
const book1 = new Object(data)
console.log("\n------ Define book1 with data ----- ")
console.log("Book1 type:",typeof book1)
console.log("Book1 value\n:,book1")
*/

const dataFunc = {
    title : "1984",
    author : "George Orwell",
    isAvailable : false,
    checkIn : function(){
        this.isAvailable = true
    },
    checkOut :function(){
        this.isAvailable = false
    }
}



