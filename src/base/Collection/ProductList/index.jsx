import React from 'react';
import PropTypes from 'prop-types';

import List from './components/List';
import './productList.css';

const ProductList = ({ products }) => (
  <div className="ProductList">
    <List items={products} />
  </div>
);

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

export default ProductList;
