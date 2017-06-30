import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  render() {
    const book = this.props.book

    return (
      <div>
        <p>{book.title}</p>
        <img src={book.imageLinks.smallThumbnail} />
        <p>{book.authors}</p>
      </div>
      )
  }
}

export default Book
