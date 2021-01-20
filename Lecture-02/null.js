function getVowels(str){
    const m = str.match(/[aeiou]/gi)
    if (m === null){
        return 0
    }
    console.log(m)
    return m.length
}

console.log(getVowels("seeing"))
console.log(getVowels("KMUTNB"))
console.log(getVowels("PHOTO"))
console.log(getVowels("KKKMMMTTTT"))