import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem, toggleFilter } from '../../Collection/ProductList/ProductList.actions';
import './topbar.css';

const add = fn => () => {
  fn();
  window.location = '#modal';
};

const Template = ({ addItem, toggleFilter }) => (
  <div className="Topbar">
    <div className="Topbar__item">
      <i className="fa fa-bars" onClick={toggleFilter}></i>
    </div>
    <div className="Topbar__title">
      <h1>Home</h1>
    </div>
    <div className="Topbar__item">
      <i className="fa fa-plus" onClick={add(addItem)}></i>
    </div>
  </div>
);

const mapDispatch2Props = dispatch => bindActionCreators({ addItem, toggleFilter }, dispatch);

export default connect(null, mapDispatch2Props)(Template);
