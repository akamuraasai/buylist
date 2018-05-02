import React from 'react';
import { connect } from 'react-redux';

import Topbar from './base/Layout/Topbar';
import Header from './base/Layout/Header';
import ProductList from './base/Collection/ProductList';

const App = ({ list, filter }) => (
  <div>
    <Topbar />
    <Header products={list} />
    <ProductList products={list} filter={filter} />
  </div>
);

const mapState2Props = state => ({ list: state.products.list, filter: state.products.filter });

export default connect(mapState2Props)(App);
