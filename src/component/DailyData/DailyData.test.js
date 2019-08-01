import React from 'react';
import { shallow } from 'enzyme';
import DailyData from './DailyData';

describe('<DailyData />', () => {
  test('renders', () => {
    const wrapper = shallow(<DailyData />);
    expect(wrapper).toMatchSnapshot();
  });
});
