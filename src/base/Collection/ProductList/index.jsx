import React from 'react';
import PropTypes from 'prop-types';

import List from './components/List';
import Modal from '../../Components/Modal';
import './productList.css';

const ProductList = ({ products, filter }) => (
  <div className="ProductList">
    <Modal />
    <List items={products} filter={filter} />
  </div>
);

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

export default ProductList;
