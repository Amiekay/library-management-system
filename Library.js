
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

module.exports = Library