const Book = require('./Book')
const User = require('./User')
const Library = require('./Library')


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

library.peakBook('1234')