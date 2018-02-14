import React from 'react';
import { shallow } from 'enzyme';

import Landingpage from './landingpage';

describe('<Landingpage />', () => {
  it('Renders without crashing', () => {
    shallow(<Landingpage />);
  });
});