import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('ProductList > Item', () => {
  it('should render without crashing', () => {
    const item = shallow(<Item />);
    expect(item).toMatchSnapshot();
  });

  it('should render the correct price text', () => {
    const props = {
      price: 12.34,
      units: 10,
    };
    const item = shallow(<Item {...props} />);

    expect(item.find('.ProductList__item__price > p').text()).toEqual('R$ 123,40');
  });

  it('should render a different class if item is completed', () => {
    const props = {
      completed: true,
    };
    const item = shallow(<Item {...props} />);

    expect(item.hasClass('is-complete')).toEqual(true);
  });
});
