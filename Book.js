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






module.exports = Book