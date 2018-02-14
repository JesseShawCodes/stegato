import React from 'react';
import { shallow } from 'enzyme';

import App from './header';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});