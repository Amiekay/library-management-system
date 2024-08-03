
class User{
    constructor(name, Id){
        this.name = name,
        this.Id = Id,
        this.borrowedBooks = []
    }
    borrowBook(book){
if(this.borrowedBooks.length>=3){
    console.log(`${this.name} can't borrow more than 3 books`)
    return false 
}
if(book.borrowBook()){
    this.borrowedBooks.push(book)
    console.log(`${this.name} borrowed ${book.title}`)

    return true
}
console.log(`${book.title} has been borrowed`)
return false

    }
   returnBook(book){
    const bookIndex = this.borrowedBooks.indexOf(book)
if(bookIndex !== -1){
    this.borrowedBooks.splice(bookIndex, 1)
    book.returnBook()
    console.log(`${this.name} returned ${book.title}`)
    return true
}
else {
    console.log(`${this.name} didn't borrow ${book.title}`)
    return false
}
   } 
}


module.exports = User