import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div>
        <ul className="book-list">
        {this.props.books.map((book) => (
          <li>
            <Book
                book = {book}
                />
          </li>
        )
      )}
    </ul>
      </div>
      )
  }
}

export default ListBooks
