import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/homepage/footer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import Modal from 'react-responsive-modal';

class SingleProduct extends Component {

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

    const topic = this.props.design.find(({ id }) => id === this.props.match.params.topicId)
      .resources.find(({ id }) => id === this.props.match.params.subId)

    return (
        <div className="container">
          <Link to={`/${this.props.match.params.topicId}`}><FontAwesomeIcon icon={['fas', 'caret-left']} /></Link>
          <Link to="/"><FontAwesomeIcon icon={['fas', 'home']} /></Link>

          <section className="single-product">
            <figure className="product-img">
              <img src={topic.info.picture} />
            </figure>

            <h2>{topic.name}</h2>
            <p>{topic.info.summary}</p>
            <button onClick={this.onOpenModal}>Uzsakyti</button>
            <Modal open={open} onClose={this.onOpenModal} center>
              <h2>Pateikite uzklausa</h2>
              <form>
                <label>
                  Vardas:
                  <input type="text" name="name" />
                </label>
                <label>
                  Tel. Nr.
                  <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Modal>
          </section>
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

export default connect(mapStateToProps)(SingleProduct);
