import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const books = this.props.books
    
    return(
      <div>
      <div className="book-shelf">
              <h2 className="shelf-title">{this.props.title}</h2>
              <div className="shelf-books">
                  <ol className="books-list">
                    {this.props.books.map((book) => (
                      <li className="books-list">                        
                        <Book
                            book = {book}
                            getBookById={this.props.getBookById}
                            key={book.id}
                            onChangeStatus={this.changeStatus}
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
