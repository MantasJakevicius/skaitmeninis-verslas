import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/additional/header';
import Footer from '../components/homepage/footer';

const About = () => {

    const title = "Apie mus";

    return (
        <div className="container">
          <Header title={title} />
          <Footer />
        </div>
    )
}

export default About;
