import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf'

class ListBooks extends Component {
  
  render() {
    const {books} = this.props
    
    let wantToRead
    let currentlyReading
    let read
    
    // filter books for bookshelves
    if(this.props.books !== null) {
      currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      wantToRead = books.filter(book => book.shelf === 'wantToRead')
      read = books.filter(book => book.shelf === 'read')
    }
      
    const onChangeStatus = this.props.onChangeStatus
    
    return (
      <div>
        <BookShelf books = {currentlyReading} title = 'Currently Reading' onChangeStatus={onChangeStatus} />
        <BookShelf books = {wantToRead} title = 'Want to read' onChangeStatus={onChangeStatus} />
        <BookShelf books = {read} title = 'Read' onChangeStatus={onChangeStatus} />
        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>     
      </div> 
    )
  }
}


export default ListBooks