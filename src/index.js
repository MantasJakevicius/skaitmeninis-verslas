import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import Homepage from './components/homepage';
import About from './components/about';
import Contact from './components/contact';
import Package from './components/about';
import ProductsPage from './containers/product_page';
import SingleProduct from './containers/single_product';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/atlikti-darbai" component={} />
          <Route path="/svetaines-etapai" component={Package} />
          <Route path={`/:topicId/:subId`} component={SingleProduct} />
          <Route path={`/:topicId`} component={ProductsPage} />
          <Route path="/kontaktai" component={Contact} />
          <Route path="/apie-mus" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
