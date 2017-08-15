import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import List from './List';

class ListBooks extends Component {

    render(){

        return (
            <div>
                <List shelf="currentlyReading" title="Currently Reading" />
                <List shelf="wantToRead" title="Want To Read" />
                <List shelf="read" title="Read" />

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