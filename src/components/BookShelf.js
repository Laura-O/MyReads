import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const books = this.props.books
    const onChangeStatus = this.props.onChangeStatus
    
    return(
      <div>
      <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books.map((book) => (
                      <li key={book.id}>
                        <Book
                            book = {book}
                            getBookById={this.props.getBookById}
                            key={book.id}
                            onChangeStatus={onChangeStatus}
                            />
                      </li>
                    )
                  )}
                </ol>
              </div>
          </div>
      </div>

    )
  }
}

export default BookShelf
