class Media {
    constructor(info){
        this.publishDate = info.publishDate
        this.name = info.name
    }
}

class Song extends Media {
    constructor(songData){
        super(songData)
        this.artist = songData.artist
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody", //if use namex : ->  undefined
    publishDate: 1975,
    price :45, // create new attribute don't show result
})

console.log(mySong)