import React from 'react';
import { shallow } from 'enzyme';

import { SearchRoot } from './root';

describe('<SearchRoot />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchRoot />);
  });
});