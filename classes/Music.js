// import the Media class:
const Media = require('./Media')
// create your Music class:


class Music extends Media {
    constructor(title, year, genre, artist, length, rating) {
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
        this.rating = rating;

    }

    summary() {
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(music) {
        return music.reduce((max, music) => max.rating > music.rating ? max : music);
    }
}




// don't change below
module.exports = Music;
