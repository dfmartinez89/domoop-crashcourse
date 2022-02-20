/*Inheritance in ES5 */

//Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


//Proto getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);//inherited properties from book object
    this.month = month;
}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

//Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);