import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import moneyFormatter from '../../../helpers/moneyFormatter';

const calculateTotal = items => items.reduce((total, item) => total + (item.price * item.units), 0);
const toPrice = moneyFormatter;

const Header = ({ products }) => (
  <div className="Header">
    <div className="Header__value">
      <div className="Header__icon">
        <i className="fa fa-shopping-cart"></i>
      </div>
      <div className="Header__value__text">
        <p>Total</p>
        <p>R$ {toPrice(calculateTotal(products))}</p>
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  products: [],
};

Header.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

export default Header;
