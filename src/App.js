import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI'
import "./App.css"
import BookShelf from './components/BookShelf'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getMyBooks()
  }

  // Helper function to get all user's books
  getMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  // Helper function to update the book's shelf
  changeStatus = (event, book) => {
    BooksAPI.update(book, event.target.value).then(() => this.getMyBooks())
  }

  render() {
    const books = this.state.books
    
    let wantToRead
    let currentlyReading
    let read
    
    if(this.state.books !== null) {
      currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      wantToRead = books.filter(book => book.shelf === 'wantToRead')
      read = books.filter(book => book.shelf === 'read')
    }
    
    return (
      <div className="App">
        <h1>My Reads</h1>
        <BookShelf books = {currentlyReading} title = "Currently Reading" onChangeStatus={this.changeStatus} />
        <BookShelf books = {wantToRead} title = "Want to read" onChangeStatus={this.changeStatus} />
        <BookShelf books = {read} title = "Read" onChangeStatus={this.changeStatus} />
      </div>
    );
  }
}

export default App;
