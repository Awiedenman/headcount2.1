import React from 'react';
import { CardContainer } from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  it('matches a snapshot of the rendered card container', () => {
    const mockData = [{
      location: 'Colorado', stats : {
        2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395}
    }];
    const wrapper = shallow( 
      <CardContainer 
        allDistricts = { mockData }
      />
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});