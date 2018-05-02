import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './index';

describe('ProductList', () => {
  const component = shallow(<ProductList />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });
});
