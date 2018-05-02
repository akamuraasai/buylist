import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeField, apply, remove } from '../../Collection/ProductList/ProductList.actions';

import './Modal.css';

const applyChanges = (item, fn) => {
  fn(item);
  window.location = '#';
};

const Modal = ({ item, name, price, units, unitType, completed, changeField, apply, remove }) => (
  <div id="modal" className="Modal">
    <div className="Modal__content">
      <a href="#" title="Close" className="Modal__close">
        <i className="fa fa-close"/>
      </a>
      <h1>
        <input
          type="checkbox"
          className="Modal__content__completed" id="completed"
          checked={completed}
          onClick={() => changeField('completed', !completed)}
        />
        <label htmlFor="completed"><span></span></label>
        <input
          type="text"
          value={name}
          className="Modal__content__name"
          onChange={e => changeField('name', e.target.value)}
        />
        {item.id !== undefined && <i className="fa fa-trash" onClick={() => applyChanges(item.id, remove)} />}
      </h1>

      <b>Preço Unitário</b>
      <p>R$ <input type="text" value={price} onChange={e => changeField('price', e.target.value)} /></p>

      <b>Unidades</b>
      <p><input type="text" value={units} onChange={e => changeField('units', e.target.value)} /></p>

      <b>Tipo</b>
      <p><input type="text" value={unitType} onChange={e => changeField('unitType', e.target.value)} /></p>

      <b>Total</b>
      <p>R$ {(price * units)}</p>

      <button className="Modal__button" onClick={() => applyChanges(item, apply)}>Aplicar Alterações</button>
    </div>
  </div>
);

const mapState2Props = state => {
  const { item } = state.products;
  return {
    item: item,
    name: item.name,
    price: item.price,
    units: item.units,
    unitType: item.unitType,
    completed: item.completed,
  };
};

const mapDispatch2Props = dispatch => bindActionCreators({ changeField, apply, remove }, dispatch);

export default connect(mapState2Props, mapDispatch2Props)(Modal);
