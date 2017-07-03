import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from '../components/Book'

class Search extends Component {
  state = {
    query: ''
  }
  
  render() {
    return (
      <div>Hi!</div>
    )
  }
}

export default Search