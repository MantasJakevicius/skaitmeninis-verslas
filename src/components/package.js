import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/additional/header';
import Footer from '../components/homepage/footer';

import Modal from 'react-responsive-modal';

class Package extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  };

  onOpenModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;

    const title = "10 zingsniu programa";

    return (
        <div className="container">
          <Header title={title} />
          <Footer />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    design: state.design
  };
}

export default connect(mapStateToProps)(Package);
