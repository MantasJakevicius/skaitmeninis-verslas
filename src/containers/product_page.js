import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/additional/header';
import Footer from '../components/homepage/footer';

const ProductsPage = ({ match, design }) => {

  const topic = design.find(({ id }) => id === match.params.topicId)

  const title = topic.name

  return (
      <div className="container">
        <Header title={title} />
        <section className="design-section">
          <ul>
            {topic.resources.map((sub) => (
              <li key={sub.id}>
                <figure className="animated fadeInLeft">
                  <img src={sub.image} />
                </figure>
                <p><span>{sub.name}</span> {sub.description} <Link to={`${match.url}/${sub.id}`}>Plačiau ></Link></p>
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </div>
    )
 }

const mapStateToProps = (state) => {
  return {
    design: state.design
  };
}

export default connect(mapStateToProps)(ProductsPage);
