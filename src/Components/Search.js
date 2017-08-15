import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js';
import Book from './Book.js';

class Search extends Component {

    state = {
        query: '',
        books:[],
        shelvedBooks: []
    }

    updateQuery = function (input){
        this.setState({query: input});
        const {shelvedBooks} = this.state;
        if(input){
            BooksAPI.search(input, 20).then((books)=>{
                if(books.error){
                    this.setState({books:[]});
                }
                else{
                    for(var i=0; i<shelvedBooks.length; i++){
                        for(var j=0; j<books.length; j++){
                            if(shelvedBooks[i].id === books[j].id){
                                books[j].shelf = shelvedBooks[i].shelf;
                            }
                        }
                    }
                    this.setState({books});
                }
            });
        }
        else{
            this.setState({books:[]});
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
    }

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            this.setState({ shelvedBooks: books });
        })
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

                {books.length === 0 && <div className="not-found"><i>No Books found</i></div>}

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