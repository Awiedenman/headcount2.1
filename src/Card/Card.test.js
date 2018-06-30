import React from 'react';
import { Card } from './Card';
import { shallow, mount } from 'enzyme';

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

  it.skip('li in Card should have a classname of over if value is greater than .5', () => {
    const mockData1 = {location: 'Colorado', stats : {2004: 0.789, 2005: 0.342, 2006: 0.111, 2007: 0.395}};
    const wrapper = shallow(<Card
        key={1}
        location={'Colorado'}
        stats={ mockData1 }
        clicked={false}
        />);
    console.log(wrapper.find('.over'))
    expect(wrapper.find('.over').render()).toEqual('2004: 0.789');

  })

  it('should call addClickedCard method when card is clicked', () => {
    const mockAddClickedCard = jest.fn();
    const wrapper = shallow(<Card
        key={1}
        location={'Colorado'}
        stats={ mockData }
        clicked={false}
        addClickedCard={mockAddClickedCard}
      />);
    wrapper.simulate('click');
    expect(mockAddClickedCard).toBeCalled();
  })

});