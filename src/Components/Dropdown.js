import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { book, updateShelf } = this.props;
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label=""
          className="btn-floating dropdown-button btn"
        >
          <i className="material-icons">expand_more</i>
        </RaisedButton>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem 
                primaryText="Currently Reading"
                onClick={() => updateShelf(book, "currentlyReading")}
                className = {book.shelf === "currentlyReading" ? "active" : "inactive"}/>
            <MenuItem 
                primaryText="Want To Read" 
                onClick={() => updateShelf(book, "wantToRead")}
                className = {book.shelf === "wantToRead" ? "active" : "inactive"}/>
            <MenuItem 
                primaryText="Read" 
                onClick={() => updateShelf(book, "read")}
                className = {book.shelf === "read" ? "active" : "inactive"}/>
          </Menu>

        </Popover>
      </div>
    );
  }
}