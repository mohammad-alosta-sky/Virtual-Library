// import the Media class:
const Media = require('./Media')
// create your Book class:

class Book extends Media {
    constructor(title, year, genre, auther, numPages, rating) {
        super(title, year, genre);
        this.auther = auther;
        this.numPages = numPages;
        this.rating = rating;

    }

    summary() {
        return `Title: ${this.title}, Author: ${this.auther}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
}


// don't change below
module.exports = Book;
