class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //Static methods don't need to instantiate the object, but it can't use the object's params
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

//Instantiate object
const book1 = new Book('Book One', 'John Doe', '2015');

console.log(book1.getSummary(), book1.getAge());
book1.revise('2021');
console.log(book1.getSummary(), book1.getAge());
console.log(Book.topBookStore());