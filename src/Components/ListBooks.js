import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Book from './Book.js';

class ListBooks extends Component {
    
    render(){
        let {books} = this.props;
        return (
            <div>
                {/* <div className='books-container'>
                    {books.map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div> */}
                <h5>Currently Reading</h5>
                <div className='books-container'>
                    {books.filter(book => book.shelf === "currentlyReading").map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                <h5>Want to Read</h5>
                <div className='books-container'>
                    {books.filter(book => book.shelf === "wantToRead").map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                <h5>Read</h5>
                <div className='books-container'>
                    {books.filter(book => book.shelf === "read").map(book => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
                <div className='add-button'>
                    <Link to="/search" className='add-contact'>
                        <div className="btn-floating btn-large waves-effect waves-light">
                            <i className="material-icons">add</i>
                        </div>
                    </Link>
                    
                </div>
            </div>
        )
    }

}

export default ListBooks;