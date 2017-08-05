import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Search extends Component {
    render(){
        return (
            <div>
                <div className="search-wrapper card">
                    <input id="search" placeholder="Search by Title or Author"/>
                    <Link to="/">
                        <i className="material-icons waves-effect" id="back-icon">arrow_back</i>
                    </Link>
                    <i className="material-icons" id="search-icon">search</i>                    
                </div>
            </div>
        )
    }
}

export default Search;