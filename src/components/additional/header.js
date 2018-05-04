import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="design-header">
          <Link to="/"><FontAwesomeIcon icon={['fas', 'caret-left']} /></Link>
          <h2>{this.props.title}</h2>
      </header>
    );
  }
}

export default Header;
