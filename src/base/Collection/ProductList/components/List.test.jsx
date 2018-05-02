import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('ProductList > List', () => {
  it('should render without crashing', () => {
    const list = shallow(<List />);
    expect(list).toMatchSnapshot();
  });

  it('should render some items', () => {
    const props = {
      items: [
        { id: 1, unitType: 'kg', name: 'Tomate', price: 3.99, units: 1, completed: false },
        { id: 2, unitType: 'kg', name: 'Cebola', price: 1.99, units: 2.3, completed: false },
        { id: 3, unitType: 'kg', name: 'Alho', price: 4.99, units: 0.4, completed: true },
        { id: 4, unitType: 'un', name: 'Leite', price: 2.49, units: 12, completed: false },
      ],
    };

    const list = shallow(<List {...props} />);
    expect(list.find('Item').length).toEqual(4);
  })
});
