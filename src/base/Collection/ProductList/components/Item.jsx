import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moneyFormatter from '../../../../helpers/moneyFormatter';
import { findById } from '../ProductList.actions';

const toPrice = moneyFormatter;

const openModal = (id, findById) => {
  findById(id);
  window.location = '#modal';
}

const Item = ({ id, name, price, units, unitType, completed, find }) => (
  <div
    className={`ProductList__item ${completed ? 'is-complete' : ''}`}
    onClick={() => openModal(id, find)}
  >
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

const mapDispatch2Props = dispatch => bindActionCreators({ find: findById }, dispatch);

export default connect(null, mapDispatch2Props)(Item);
