import React from 'react';
import { shallow } from 'enzyme';
import WeatherDataDisplay from './WeatherDataDisplay';

describe('<WeatherDataDisplay />', () => {
  test('renders', () => {
    const wrapper = shallow(<WeatherDataDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
