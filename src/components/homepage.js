import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from 'react-responsive-modal';
import Slider from "react-slick";

import Header from './homepage/header';
import Footer from './homepage/footer';

import _ from 'lodash';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      0: false,
      1: false,
      2: true,
      3: false,
      4: false
    };

    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(total, idx) {
    this.setState({total, [idx]: !this.state[idx]});
  }

  renderTiles() {
      return this.props.design.map((tile) => {
        return(
          <Link key={tile.id} to={`/${tile.id}`}>
            <h2>{tile.name}</h2>
            <p>{tile.description}</p>
          </Link>
        );
      });
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
        <Header />
          <section className="buttons">
            {this.renderTiles()}
            <Link to="/svetaines-etapai">
              <p>Svetainės kūrimo etapai</p>
            </Link>
            <div className="smaller-buttons">
              <Link to="/atlikti-darbai">
                <p>Atlikti darbai</p>
              </Link>
              <button onClick={()=>this.onCheck(0, 4)}>Gauti pasiulymą</button>
            </div>
            <button onClick={()=>this.onCheck(0, 3)} className="link">Sužinokite preliminarią svetainės kainą ></button>
          </section>
        <Footer />

        <Modal open={this.state[2]} onClose={()=>this.onCheck(0, 2)} center>
          <Slider {...settings}>
            <figure>
              <img src='images/pasiulymas.png' />
            </figure>
          </Slider>
        </Modal>

        <Modal open={this.state[3]} onClose={()=>this.onCheck(0, 3)} >
          <h2>Sužinokite preliminarią kainą</h2>
            <label>
              <input type="checkbox" checked={this.state[0]} value={15} onChange={event => this.onCheck(
                this.state[0]
                ? _.subtract( parseInt(this.state.total), parseInt(event.target.value) )
                : _.sum([ parseInt(this.state.total), parseInt(event.target.value) ]), 0
              )} />
              Autorinis dizainas
            </label>
            <label>
              <input type="checkbox" value={10} checked={this.state[1]} onChange={event => this.onCheck(
                this.state[1]
                ? _.subtract( parseInt(this.state.total), parseInt(event.target.value) )
                : _.sum([ parseInt(this.state.total), parseInt(event.target.value) ]), 1
                )} />
              Sablonas
            </label>
          Kaina: <input type="text" value={this.state.total += '\u20AC'} readOnly />
        </Modal>

        <Modal open={this.state[4]} onClose={()=>this.onCheck(0, 4)}>
          <h3>pasiulymas</h3>
            <form method="post">
              <input type="hidden" name="form-name" value="offer" />
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
              <button type="submit">Send</button>
            </form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    design: state.design
  };
}

export default connect(mapStateToProps)(Homepage);
