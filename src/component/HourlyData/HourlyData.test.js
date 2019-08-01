import React from 'react';
import { shallow } from 'enzyme';
import HourlyData from './HourlyData';

describe('<HourlyData />', () => {
  test('renders', () => {
    const wrapper = shallow(<HourlyData />);
    expect(wrapper).toMatchSnapshot();
  });
});
