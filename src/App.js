import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListBooks from './Components/ListBooks.js';
import Search from './Components/Search.js'

class App extends Component { 

  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
          <div>
            <nav>
              <div className="logo">
                <a href="/">Your Shelf</a>
              </div>
            </nav>
            <ListBooks />
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
