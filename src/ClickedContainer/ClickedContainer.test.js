import React from 'react';
import { shallow } from 'enzyme';
import { ClickedContainer } from './ClickedContainer';

describe('ClickedContainer', ()=> {
  const mockAllDistricts = [];
  const mockAddClickedCard = jest.fn();
  const mockCompareDistrictAverages = jest.fn();
  const mockFindAverage = jest.fn();
  
  it('should match snapshot upon render', () => {
    const wrapper = shallow(
      <ClickedContainer
        allDistricts={ mockAllDistricts }
        addClickedCard={ mockAddClickedCard }
        compareDistrictAverages={ mockCompareDistrictAverages }
        findAverage={ mockFindAverage }
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 2 card components into our container if 2 cards are clicked', () => {
    const wrapper = shallow( 
      <ClickedContainer 
        clickedCard1={ {location: 'Colorado' } }
        clickedCard2={ {location: 'Academy 20' } }
      />);
    console.log(wrapper.debug());
    
    expect(wrapper.find('.clicked').length).toEqual(2);
  });

  it('should render 1 card component into  the container if 1 card is clicked', () => {
    const wrapper = shallow(
      <ClickedContainer
        clickedCard1={ { location: 'Colorado' } }
      />
    );
    expect(wrapper.find('.clicked').length).toEqual(1);
  });

  it('should not render any cards to the container if no cards are clicked', () => {
    const wrapper = shallow(
      <ClickedContainer />
    );
    expect(wrapper.find('.clicked').length).toEqual(0);
  });




});