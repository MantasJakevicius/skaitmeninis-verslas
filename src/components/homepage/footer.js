import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import { connect } from 'react-redux';

class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer>
        <div className="contacts">
          <div className="icon">
            <FontAwesomeIcon icon='phone' />
            <p>+370 670 03019</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon='envelope' />
            <p>info@skaitmeninisverslas.lt</p>
          </div>
        </div>

        <div className="socials">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </div>

        <div className="copyright">
          <p>mb &quot;skaitmeninis verslas&quot; <span>&copy;</span> {this.getYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
