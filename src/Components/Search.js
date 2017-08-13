import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from '../BooksAPI.js';
import Book from './Book.js';

class Search extends Component {

    state = {
        query: '',
        books:[]
    }

    updateQuery = function (input){
        this.setState({query: input.trim()})
        let {query} = this.state;
        if(query === ""){
            this.setState({book: []});
        }
        else{
            BooksAPI.search(query, 5).then((books)=>{
                if(books.error){
                    this.setState({books:[]})
                }
                else{
                    this.setState({books});
                }
            });
        }
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
        const {query, books} = this.state;
        return (
            <div>
                <div className="search-wrapper card">
                    <input id="search" 
                           placeholder="Search by Title or Author"
                           value = {query}
                           onChange = {(e) => (this.updateQuery(e.target.value))}/>
                    <Link to="/">
                        <i className="material-icons waves-effect" id="back-icon">arrow_back</i>
                    </Link>
                    <i className="material-icons" id="search-icon">search</i>                    
                </div>
                <div className="books-container">
                    {books.map(book => (
                        <Book 
                            key={book.id} 
                            book={book}
                            updateShelf = {this.updateShelf} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Search;