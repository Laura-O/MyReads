import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI'
import ListBooks from './components/ListBooks'


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
    return (
      <div className="App">
          <ListBooks
            books = {this.state.books}
            />
            {console.log(this.state.books)}
      </div>
    );
  }
}

export default App;
