import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  it('matches a Snapshot of the Card', () => {
    const mockData = {location: 'Colorado', stats : {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395}};
    const wrapper = shallow(
      <Card
        key={1}
        location={'Colorado'}
        stats={ mockData }
      />);

    expect(wrapper).toMatchSnapshot();
  });

});