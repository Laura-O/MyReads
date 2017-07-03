import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/lib/Image';

class Book extends Component {       
  render() {
    const {book, onChangeStatus} = this.props
    
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'>
            <Image src={book.imageLinks.smallThumbnail} responsive thumbnail />
          </div>        
          <div className='book-shelf-changer'>
             <select defaultValue={book.shelf} onChange={(event) => onChangeStatus(event, book)}>
               <option value='none' disabled>Move to...</option>
               <option value='currentlyReading'>Currently Reading</option>
               <option value='wantToRead'>Want to Read</option>
               <option value='read'>Read</option>
               <option value='none'>None</option>
             </select>
           </div>
         </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{book.authors ? book.authors[0] : ''}</div>
      </div>
      )
  }
}

export default Book
