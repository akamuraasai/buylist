import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const filterItems = (items, filter) =>
  filter
    ? items.filter(i => i.completed === false)
    : items;

const List = ({ items, filter }) => (
  <div className="ProductList__list">
    {filterItems(items, filter).map(({ id, name, price, units, unitType, completed }) => (
      <Item
        key={id}
        id={id}
        name={name}
        price={price}
        units={units}
        unitType={unitType}
        completed={completed}
      />
    ))}
  </div>
);

List.defaultProps = {
  items: [],
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    units: PropTypes.number,
    unitType: PropTypes.string,
    completed: PropTypes.bool,
  })),
};

export default List;
