import React, { Component } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

class Book extends Component {
  state = {
    showModal: false
  }
  
  closeModal = () => {
    this.setState({showModal: false})
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  render() {
    const {book, onChangeStatus} = this.props
    let description = book.description
    let categories = book.categories
    let pageCount = book.pageCount
    let authors = book.authors.join(", ")
    
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'>
            <div className="book-cover" onClick={this.showModal} style={{ width: 128, height: 188, backgroundImage: `url('${book.imageLinks.smallThumbnail}')` }}>
           <div className="overlay">
             <div className="info"></div>
           </div>
         </div>
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
          
          <Modal show={this.state.showModal} onHide={this.closeModal} bsSize="lg">
          <Modal.Header closeButton>
              <Modal.Title>{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body bsClass="modal-body">
            <div>
              <p><strong>Authors</strong>: {authors}</p>
              <p><strong>Category</strong>: {categories}</p>              
              <p><strong>Pages:</strong>: {pageCount}</p>
              <hr />
              <h4>Description</h4>
              <p>{description}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      
      
      )
  }
}

export default Book
