import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  render() {

    return (
      <div>
        <p>{this.props.book.title}</p>
        <img src={this.props.book.imageLinks.smallThumbnail} />
        <p>{this.props.book.authors}</p>
      </div>
      )
  }
}

export default Book
