import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './Components/ListBooks.js';
import * as BooksAPI from './BooksAPI.js';

class App extends Component {
  
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({ books });
      console.log("Books ",this.state.books);
    });
  }

  render() {
    return (
      <div>
        <ListBooks books={this.state.books} />
        <div className='add-button'>
          <a className="btn-floating btn-large waves-effect waves-light">
              <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
