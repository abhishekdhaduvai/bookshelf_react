import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI.js';
import Book from './Book.js';

class List extends Component {

    PropTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired
	}

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
    }

    render(){
        const {books} = this.state;
        const {shelf, title} = this.props;
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
                                    updateShelf = {this.updateShelf} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default List;