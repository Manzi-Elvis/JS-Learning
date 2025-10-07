/*Simple Library Book Tracker 
This task would be for managing a small library's book collection. It's similar in concept to an inventory system but with a focus on tracking books that are loaned out.
Book Class:
Properties: id, title, author, isAvailable (boolean)
Library Class:
Methods:
addBook(title, author): Adds a new book to the library's collection.
viewAllBooks(): Displays a list of all books, showing their title, author, and availability status.
loanBook(id): Marks a specific book as unavailable.
returnBook(id): Marks a specific book as available.
*/

class Book {
    constructor(id, title, author, isAvailable = true){
        this.id = id,
            this.title = title,
            this.author = author,
            this.isAvailable = isAvailable
      }
}

const Library = {
      book: [],
      index: 0,
      addBook(title, author){
        const newBook = new Book(++this.index, title, author)
        return this.book.push(newBook)
      },
      viewAllBooks(){
            if(this.book.length === 0){
                console.log("No books in storage")
            }
            for(let i = 0; i < this.book.length; i++){
                  console.log(`ID: ${this.book[i].id} \n Title: ${this.book[i].author} \n Availability: ${this.book[i].isAvailable}`)
            }
      },
      loanBook(id){
        const books = this.book.find(books => books.id === id)
        if(!books){
            console.log(`There is no book with ID: ${id}`)
        }else {
            if (books.isAvailable === true){
                console.log(`Book with ID: ${id} is available in the library`)
            } else {
                this.books.isAvailable = false
                console.log(`Book ${this.books.title} is not available in the library`)
            }
        }
      },
      returnBook(id){}
}
console.log(Library.addBook("Harry Potter" , "JK Rowlings"));
console.log(Library.addBook("Rich Dad Poor Dad" , "Robert Kiyosaki"));
console.log(Library.addBook("Can't Hurt Me" , "David Goggins"));
console.log(Library.addBook("Learn Javascript" , "Elvis"));
Library.viewAllBooks();
Library.loanBook(2);