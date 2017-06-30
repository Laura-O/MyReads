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
        <ol>
        {this.props.books.map((book) => (
          <li><Book book = {book} /></li>
        )
      )}
        </ol>
      </div>
      )
  }
}

export default ListBooks
