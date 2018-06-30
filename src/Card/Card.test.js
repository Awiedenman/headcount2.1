import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
    const mockData = {location: 'Colorado', stats : {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395}};
  it('matches a Snapshot of the Card', () => {
    const wrapper = shallow(
      <Card
        key={1}
        location={'Colorado'}
        stats={ mockData }
      />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should have classname of "clicked" if prop clicked is true', () => {
    const wrapper = shallow(<Card
        key={1}
        location={'Colorado'}
        stats={ mockData }
        clicked={true}
      />);
    expect(wrapper.is('.clicked')).toEqual(true);
  })
  it('should not have a classname of "clicked" if prop clicked is false', () => {
    const wrapper = shallow(<Card
        key={1}
        location={'Colorado'}
        stats={ mockData }
        clicked={false}
      />);
    expect(wrapper.is('.clicked')).toEqual(false);
  })

});