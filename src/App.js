import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import ListBooks from './components/ListBooks'
import Search from './components/Search'

class App extends Component {
  state = {
    books: []
  }

  // get all books post-mount
  componentDidMount() {
    this.getMyBooks()
  }

  // helper function to get all books
  getMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({books}))
  }

  // helper function to update books
  changeStatus = (event, book) => {
    BooksAPI.update(book, event.target.value).then(() => this.getMyBooks())
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onChangeStatus={this.changeStatus}
          />)}
        />
        <Route path='/search' render={({history}) => (
          <Search
            onChangeStatus={this.changeStatus}
            onClose={() => history.push('/')}
          />)}
        />
      </div>
    );
  }
}

export default App;
