import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './Components/ListBooks.js';
import Search from './Components/Search.js'
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
        <Route exact path="/" render={()=>(
          <div>
            <nav>
              <div className='logo'>
                <a href="/">Your Shelf</a>
              </div>
            </nav>
            <ListBooks books={this.state.books} />
          </div>      
        )} /> 

        <Route exact path="/search" render={()=>(
          <Search />
        )}  />  

      </div>
    );
  }
}

export default App;
