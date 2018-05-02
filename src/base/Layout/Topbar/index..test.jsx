import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './index';

describe('Topbar', () => {
  const topbar = shallow(<Topbar />);

  it('should render without crashing', () => {
    expect(topbar).toMatchSnapshot();
  });
});
