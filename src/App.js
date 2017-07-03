import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import "./App.css"
import ListBooks from './components/ListBooks'
import Search from './components/Search'

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
        <h1>MyReads</h1>
        <Route exact path="/" render={() => (
          <ListBooks
            books = {this.state.books}
            onChangeStatus={this.changeStatus}
          />
           )} />
           <Route path="/search" render={({ history }) => (
             <Search
               onChangeStatus={this.changeStatus}
               onClose={() => history.push('/')}
             />
           )} />
      </div>
    );
  }
}

export default App;
