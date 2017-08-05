import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    
    render(){
        const { book } = this.props;
        return (
            <div className='book-tile'>
                <div className='book-thumbnail'>
                    <div className='book-image'>
                        <img src={book.imageLinks.thumbnail} />
                    </div>                    
                    <a className="btn-floating btn-small waves-effect waves-light red">
                        <i className="material-icons">expand_more</i>
                    </a>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-author'>{book.authors[0]}</div>
            </div>
        )
    }

}

export default Book;