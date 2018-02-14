import React from 'react';
import { shallow } from 'enzyme';

import Splash from './splash';

describe('<Splash />', () => {
  it('Renders without crashing', () => {
    shallow(<Splash />);
  });
});