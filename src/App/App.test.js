import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('App', () => {

  it('should have and intial state of an empty array', () => {
    const wrapper = shallow(
      <App />, { disableLifecycleMethods: true });

    expect(wrapper.state().allDistricts).toEqual([]);
  });

  describe( 'componentDidMount', () => {
    it('should setState of allDistricts after pageload', () => {
      const mockHelper = new DistrictRepository(kinderData);
      const wrapper = shallow(<App />);
      
      wrapper.instance(); 
      
      expect(wrapper.instance().state.allDistricts).toEqual(mockHelper.stats);
    });
  });

  describe('showSearchResults', () => {
  
    it('should setState to include only district locations that match the user input', () => {
      const searchInput = 'Colorado';
      const wrapper = shallow(<App/>);

      expect(wrapper.state().allDistricts.length).toEqual(181);
      
      wrapper.instance().showSearchResults(searchInput);

      expect(wrapper.state().allDistricts.map(district => district.location.toUpperCase()))
        .toEqual(['COLORADO', 'COLORADO SPRINGS 11']);
    });
  });

  describe('addClickedCard', () => {
    it('returns an array that contains one card object with a truthy property clicked', () => {
      const wrapper = shallow(<App />);
      //test initial state of no clicked cards in componentdidMount section

      wrapper.instance().addClickedCard('Colorado');

      const clickedArray = wrapper.state().allDistricts.filter(district => district.clicked);

      expect(clickedArray.length).toEqual(1);
      expect(clickedArray[0].location.toUpperCase()).toEqual('COLORADO');
      //should have test for unclicking card and for clicking a second card
      //should have test for not allowing a third card to be clicked
    });
    
  });
});

