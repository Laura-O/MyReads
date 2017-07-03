import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from '../components/ListBooks'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    
    
    return(
      <div>
      <div className="shelves">
              <h2 className="shelf-title">{this.props.title}</h2>
              <div className="shelf-books">
                  <ol className="books-list">
                    <ListBooks books = {this.props.books} />
                  </ol>
              </div>
          </div>
      </div>

    )
  }
}

export default BookShelf
