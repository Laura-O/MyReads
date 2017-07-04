import React from 'react'
import Book from '../components/Book'
import Panel from 'react-bootstrap/lib/Panel';
import Badge from 'react-bootstrap/lib/Badge';

const BookShelf = props => {
    const {books, onChangeStatus} = props
    const numBooks = books.length
    const title = (<h3>{props.title} <Badge>{numBooks}</Badge></h3>)
    
    return(
      <div>
        <Panel header={title} bsStyle="primary">
              <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {books.map((book) => (
                      <li key={book.id}>
                        <Book
                          book = {book}
                          getBookById={props.getBookById}
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


export default BookShelf
