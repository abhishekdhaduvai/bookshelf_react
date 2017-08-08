import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js';
import Book from './Book.js';

class ListBooks extends Component {

    state = {
       books:[]
    }

    componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({ books });
        });
    }

    updateShelf = (updatedBook, shelf) => {
        this.setState((state)=>{
            this.state.books.map((book) => {
                if(book.id === updatedBook.id){
                    book.shelf = shelf;
                }
            });
        });
        BooksAPI.update(updatedBook, shelf);
        document.getElementById(updatedBook.id).style.display = "none";
    }

    render(){
        let {books} = this.state;
        return (
            <div>
                {books.filter(book => book.shelf === "currentlyReading").length > 0 && (
                    <div>
                        <h5>Currently Reading</h5>
                        <div className="divider" />
                        <div className="books-container">
                            {books.filter(book => book.shelf === "currentlyReading").map(book => (
                                <Book 
                                    key={book.id} 
                                    book={book}
                                    updateShelf = {this.updateShelf} />
                            ))}
                        </div>
                    </div>
                )}

                {books.filter(book => book.shelf === "wantToRead").length > 0 && (
                    <div>
                        <h5>Want to Read</h5>
                        <div className="divider" />
                        <div className="books-container">
                            {books.filter(book => book.shelf === "wantToRead").map(book => (
                                <Book 
                                    key={book.id} 
                                    book={book}
                                    updateShelf = {this.updateShelf} />
                            ))}
                        </div>
                    </div>
                )}

                {books.filter(book => book.shelf === "read").length > 0 && (
                    <div>
                        <h5>Read</h5>
                        <div className="divider" />
                        <div className="books-container">
                            {books.filter(book => book.shelf === "read").map(book => (
                                <Book 
                                    key={book.id} 
                                    book={book}
                                    updateShelf = {this.updateShelf} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="add-button">
                    <Link to="/search" className="add-contact">
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