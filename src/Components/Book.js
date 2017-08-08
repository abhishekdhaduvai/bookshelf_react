import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    static PropTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
	}
    
    render(){
        const { book, updateShelf } = this.props;

        function showMenu(book){
            var dropdowns = document.getElementsByClassName("dropdown");
            for(var i=0; i<dropdowns.length; i++){
                document.getElementById(dropdowns[i].id).style.display = "none";  
            }
            document.getElementById(book.id).style.display = "block";  
            document.getElementById(book.id).style.opacity = "1";
        }

        return (
            <div className="book-tile">
                <div className="book-thumbnail">
                    <div className="book-image">
                        <img src={book.imageLinks.thumbnail} alt="book-thumbnail"/>
                    </div>                    
                     <a className="btn-floating btn-small waves-effect waves-light red dropdown-button btn" 
                       onClick={() => showMenu(book)}>
                        <i className="material-icons">expand_more</i>
                    </a>

                    <ul id={book.id} className="dropdown">
                        <li 
                            onClick={() => updateShelf(book, "currentlyReading")}
                            className = {book.shelf === "currentlyReading" ? "active" : "inactive"}>
                            <a>Currently Reading</a>
                        </li>
                        <div className="divider" />
                        <li 
                            onClick={() => updateShelf(book, "wantToRead")}
                            className = {book.shelf === "wantToRead" ? "active" : "inactive"}>
                            <a>Want To Read</a>
                        </li>
                        <div className="divider" />
                        <li 
                            onClick={() => updateShelf(book, "read")}
                            className = {book.shelf === "read" ? "active" : "inactive"}>
                            <a>Read</a>
                        </li>
                    </ul>

                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.authors[0]}</div>
            </div>
        )
    }

}

export default Book;