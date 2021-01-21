let str = "Hello"

let iterator = str[Symbol.iterator]()
console.log(iterator)

while (true) {
    let result = iterator.next()
    if (result.done)
        break
    console.log(result.value)
}