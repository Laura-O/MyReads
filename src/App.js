import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import "./App.css"
import ListBooks from './components/ListBooks'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getMyBooks()
  }

  getMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  changeStatus = (event, book) => {
    BooksAPI.update(book, event.target.value).then(() => this.getMyBooks())
  }
    
  render() {
    
    const books = this.state.books
    
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <ListBooks
            books = {this.state.books}
            onChangeStatus={this.changeStatus}
          />
           )} />
      </div>
    );
  }
}

export default App;
