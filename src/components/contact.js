import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/additional/header';
import Footer from '../components/homepage/footer';

const Contact = () => {

    const title = "Kontaktai";

    return (
        <div className="container">
          <Header title={title} />
        </div>
    )
}

export default Contact;
