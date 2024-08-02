class Book{
    constructor(title, author, ISBN, Id ){
        this.title = title,
        this.author = author,
        this.ISBN = ISBN,
        this.Id = Id,
        this.borrowed = false
    }
    borrowBook(){
       if(!this.borrowed){
        this.borrowed = true
        return true
       } 
       return false
    }
    returnBook(){
        if(this.borrowed){
        this.borrowed = false
            return true
        }
        else return false
    }
    isborrowed(){
        return this.borrowed
    }
}

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
class Library{
    constructor(){
        this.books = [],
        this.users = []
    }
    registerMember(user){
        // step1 check if user exists
        this.users.push(user)
        console.log(` added ${user.name} to the library`)

    }
    addNewBook(book){
        this.books.push(book)
        console.log(` added ${book.title} to the library`)

    }
    findUser(userId){
        return this.users.find((user)=>user.Id === userId)
    }
    findBook(ISBN){
        return this.books.find((book)=>book.ISBN === ISBN)
    }
    borrowBook(userId, ISBN){
        const user = this.findUser(userId)
        const book = this.findBook(ISBN)
        if(user && book){
            user.borrowBook(book)
        }
        else{
            console.log(`${user.name} or ${book.title} not found`)

        }
        
        
    }
    returnBook(userId, ISBN){
        const user = this.findUser(userId)
        const book = this.findBook(ISBN) 
        if(user && book){
            user.returnBook(book)
        }
        else{
            console.log(`${user.name} or ${book.title} not found`)

        }
}
}

const library = new Library()
const book1 = new Book('CSS', 'Chinua', '123', 1)
const book2 = new Book('HTML', 'Ndebe', '1234', 2)
const book3 = new Book('JS', 'John', '12345', 3)
const book4 = new Book('Java', 'Chima', '123456', 4)


library.addNewBook(book1)
library.addNewBook(book2)
library.addNewBook(book3)
library.addNewBook(book4)


const John = new User('John', 1)
const Joe = new User('Joe', 2)
const Joy = new User('Joy', 3)

library.registerMember(John)
library.registerMember(Joy)
library.registerMember(Joe)

library.borrowBook(1, '1234')
library.borrowBook(1, '123')
library.borrowBook(1, '12345')
// library.borrowBook(1, '123456')

library.returnBook(1, '123456')