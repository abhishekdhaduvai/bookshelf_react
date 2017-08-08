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
    
    componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({ books });
        });
    }
    
    render(){
        let showingBooks;
        const {query, books} = this.state;
        if(query){
			const match = new RegExp(escapeRegExp(query),'i');
			showingBooks = books.filter((book) => match.test(book.title))
        }
        else{
            showingBooks = [];
        }
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
                    {showingBooks.map(book => (
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