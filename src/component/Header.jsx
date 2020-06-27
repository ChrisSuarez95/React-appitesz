import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="App-header">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Header;
