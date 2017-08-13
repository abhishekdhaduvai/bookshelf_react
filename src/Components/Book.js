import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class Book extends Component {

    PropTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
	}
    
    render(){
        const { book, updateShelf } = this.props;

        return (
            <div className="book-tile">
                <div className="book-thumbnail">

                    <div className="book-image">
                        {book.imageLinks && <img src={book.imageLinks.thumbnail} alt="book-thumbnail"/>}
                        {!book.imageLinks && 
                        <img width="80%" 
                            src={"https://nnp.wustl.edu/img/bookCovers/genericBookCover.jpg"} alt="book-thumbnail"/> }
                    </div>

                    <Dropdown class="dropdown-btn" book={book} updateShelf={updateShelf}/>

                </div>

                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map(author => (
                    <div className="book-author" key={author}>{author}</div>
                ))}
            </div>
        )
    }

}

export default Book;