import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class List extends Component {

    PropTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
	}

    render(){
        const {shelf, title, updateShelf, books} = this.props;
        return (
            <div>
                {books.filter(book => book.shelf === shelf).length > 0 && (
                    <div>
                        <h5>{title}</h5>
                        <div className="divider" />
                        <div className="books-container">
                            {books.filter(book => book.shelf === shelf).map(book => (
                                <Book 
                                    key={book.id} 
                                    book={book}
                                    updateShelf = {updateShelf} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default List;