import React from 'react';
import { shallow } from 'enzyme';

import { AsyncApp } from './AsyncApp';

describe('<AsyncApp />', () => {
  it('Renders without crashing', () => {
    shallow(<AsyncApp />);
  });
});
