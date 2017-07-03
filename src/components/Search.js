import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

import * as BooksAPI from '../utils/BooksAPI'
import Book from '../components/Book'

class Search extends Component {
  state = {
    foundBooks: []
  }

  searchBooks = (query) => {
    if (query.length > 1) {
      let foundBooks = []

      BooksAPI.search(escapeRegExp(query), 10).then((books) => {
        if (books.error) {} else {
          const match = new RegExp(query, 'gi')
          foundBooks = books.filter((book) => match.test(book.title))
          foundBooks.sort(sortBy('title'))
          this.setState({foundBooks})
        }
      })
    } else {
      this.setState({foundBooks: []})
    }
  }

  render() {
    const {onChangeStatus} = this.props
    const {foundBooks} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map((book) => {
              return (<Book key={book.id} book={book} onChangeStatus={onChangeStatus}/>)
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search