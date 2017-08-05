import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class ListBooks extends Component {
    
    render(){
        let {books} = this.props;
        return (
            <div>
                <nav>
                    <div className='logo'>
                        <a href="/">Your Shelf</a>
                    </div>
                </nav>
                <div className='books-container'>
                    {books.map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            </div>
        )
    }

}

export default ListBooks;