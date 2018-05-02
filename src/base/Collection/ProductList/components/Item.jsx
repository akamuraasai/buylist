import React from 'react';
import PropTypes from 'prop-types';

import moneyFormatter from '../../../../helpers/moneyFormatter';

const toPrice = moneyFormatter;

const Item = ({ name, price, units, unitType, completed }) => (
  <div className={`ProductList__item ${completed ? 'is-complete' : ''}`}>
    <div className="ProductList__item__image">
      <img src="http://via.placeholder.com/60x60" alt="product" />
    </div>
    <div className="ProductList__item__text">
      <p className="ProductList__item__text__title">{name}</p>
      <p><b>R$ {toPrice(price)} </b> x {units}{unitType}</p>
    </div>
    <div className="ProductList__item__price">
      <p>R$ {toPrice(price * units)}</p>
    </div>
  </div>
);

Item.defaultProps = {
  name: '',
  price: 0,
  units: 0,
  unitType: 'un',
  completed: false,
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  units: PropTypes.number,
  unitType: PropTypes.string,
  completed: PropTypes.bool,
};

export default Item;
