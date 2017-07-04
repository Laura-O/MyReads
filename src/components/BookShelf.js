import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'
import Panel from 'react-bootstrap/lib/Panel';
import Badge from 'react-bootstrap/lib/Badge';

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const {books, onChangeStatus} = this.props
    const numBooks = books.length
    const title = (<h3>{this.props.title} <Badge>{numBooks}</Badge></h3>)
    
    return(
      <div>
        <Panel header={title} bsStyle="primary">
              <div className='bookshelf-books'>
                  <ol className='books-grid'>
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
        </Panel>
      </div>

    )
  }
}

export default BookShelf
