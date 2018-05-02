import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
  const header = shallow(<Header />);

  it('should render without crashing', () => {
    expect(header).toMatchSnapshot();
  });

  it('should render the total price', () => {
    const items = [
      { price: 5, units: 1 },
      { price: 4, units: 10 },
    ];
    const headerWithItems = shallow(<Header products={items} />);

    expect(headerWithItems.find('.Header__value__text > p').at(1).text()).toEqual('R$ 45,00');
  });
});
