import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  render() {
    const book = this.props.book

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover">
            <img src={book.imageLinks.smallThumbnail} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors[0] : ''}</div> 
        </div>
      </div>
      )
  }
}

export default Book
