const myBooks = {
  collection: [],
  addBook: function (title, author, totalPages) {
    /**
     * @param {string} title
     * @param {string} author
     * @param {number} totalPages
     * @returns {object} Returns a object containing all the information of the book that has been added.
     **/
    myBooks.collection.push(createdBook())
    function createdBook() {
      return {
        title,
        author,
        totalPages,
        pagesRead: 0,
        timesRead: 0,
      }
    }
  },
  displayBooks: function () {
    for (const book of myBooks.collection) {
      console.log(`"${book.title}" by ${book.author}`)
    }
  },
  updatePages: function (bookTitle, pagesUpdated) {
    for (const book of myBooks.collection) {
      if (bookTitle === book.title) {
        book.pagesRead += pagesUpdated
        if (book.pagesRead >= book.totalPages) {
          book.pagesRead -= book.totalPages
          book.timesRead++
        }
      }
    }
  },
  removeBook: function (bookTitle) {
    for (let i = 0; i < myBooks.collection.length; i++) {
      if (bookTitle === myBooks.collection[i].title) {
        myBooks.collection.splice(i, 1)
      }
    }
  },
}
// myBooks.addBook('The Hobbit', 'Tolkien, JRR', 650)
// myBooks.addBook('Project Hail Mary', 'Weirs, Andy', 700)
// myBooks.addBook('Oathbringer', 'Sanderson, Brandon', 1200)
// myBooks.displayBooks()
// myBooks.updatePages('The Hobbit', 400)
// myBooks.updatePages('The Hobbit', 400)
// myBooks.removeBook('Oathbringer')
// myBooks.displayBooks()
