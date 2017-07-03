import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI'
import "./App.css"
import BookShelf from './components/BookShelf'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
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
        <BookShelf books = {currentlyReading} title = "Currently Reading" />
        <BookShelf books = {wantToRead} title = "Want to read" />
        <BookShelf books = {read} title = "Read" />
      </div>
    );
  }
}

export default App;
