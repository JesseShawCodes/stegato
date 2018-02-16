import React from 'react';
import { shallow } from 'enzyme';

import { Heading } from './header';

describe('<Heading />', () => {
  it('Renders without crashing', () => {
    shallow(<Heading />);
  });
});