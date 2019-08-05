import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';

describe('<Time />', () => {
  test('renders', () => {
    const wrapper = shallow(<Time />);
    expect(wrapper).toMatchSnapshot();
  });
});
