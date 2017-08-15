import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js';
import List from './List';

class ListBooks extends Component {

    state = {
        books: []
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
        return (
            <div>

                <List 
                    shelf="currentlyReading" 
                    title="Currently Reading"
                    books={books} 
                    updateShelf={this.updateShelf}/>

                <List 
                    shelf="wantToRead" 
                    title="Want To Read" 
                    books={books} 
                    updateShelf={this.updateShelf} />

                <List 
                    shelf="read" 
                    title="Read" 
                    books={books} 
                    updateShelf={this.updateShelf} />

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