import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal', () => {
  const component = shallow(<Modal />);

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });
});
