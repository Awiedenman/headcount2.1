import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';


it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});

describe('App', () => {

  it('should have and intial state of an empty array', () => {
    const wrapper = shallow(
      <App />, { disableLifecycleMethods: true });

    expect(wrapper.state().allDistricts).toEqual([]);
  });

  describe( 'componentDidMount', () => {
    it('should setState of allDistricts after pageload', () => {
    // const mockData = {location: 'Colorado', stats : {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395}};
      const mockHelper = new DistrictRepository(kinderData);
      const wrapper = shallow(<App />);
      
      wrapper.instance(); 
      
      expect(wrapper.instance().state.allDistricts).toEqual(mockHelper.stats);
    });
  });

  describe('showSearchResults', () => {

    // it.skip('should call findAllMatches', () => {
    //   const mockSearchInput = 'ACADEMY 20';
    //   const wrapper = shallow( <App/> );

    //   wrapper.instance().showSearchResults(mockSearchInput);

    //   expect(mockFindAllMatches).toHaveBeenCalledWith(mockSearchInput);
    // });

    // it.skip('should call showSearchResults with the search input as an argument', () => {
    //   const mockFindAllMatches = jest.fn();
    //   const mockSearchInput = 'ACADEMY 20';
    //   const wrapper = shallow( <App/> );

    //   wrapper.instance().showSearchResults(mockSearchInput);
    //   mockFindAllMatches.mockImplementation();

    //   expect(mockFindAllMatches).toHaveBeenCalledWith(mockSearchInput);
    // });
  
    it('should setState to include only district locations that match the user input', () => {
      const searchInput = 'Colorado';
      const wrapper = shallow(<App/>)

      expect(wrapper.state().allDistricts.length).toEqual(181);
      
      wrapper.instance().showSearchResults(searchInput);
      expect(wrapper.state().allDistricts.map(district => district.location.toUpperCase()))
      .toEqual(['COLORADO', 'COLORADO SPRINGS 11']);
    });
  });

  describe('addClickedCard', () => {
    it('should return an array that contains one card object with a truthy property clicked', () => {
      const wrapper = shallow(<App />);
      //test initial state of no clicked cards in componentdidMount section
      wrapper.instance().addClickedCard('Colorado');
      const clickedArray = wrapper.state().allDistricts.filter(district => district.clicked)
      expect(clickedArray.length).toEqual(1);
      expect(clickedArray[0].location.toUpperCase()).toEqual('COLORADO');
      //should have test for unclicking card and for clicking a second card
      //should have test for not allowing a third card to be clicked
    })

    it.skip('should start off with a property of clicked = false', () => {
      // const mockLocation = 'Colorado';
      const wrapper = shallow( <App />);

      // wrapper.instance().addClickedCard(mockLocation);

      expect(wrapper.find().children('Card').clicked).toEqual(false);

    });

    it.skip('should update the property of clicked to true when clicked', () => {
      const mockLocation = 'Colorado';
      const wrapper = mount( <App />);

      wrapper.instance().addClickedCard(mockLocation);

      expect(wrapper.find('.card').is('.clicked')).toEqual(true);
    });
    
    it.skip('should update state to include a new array of the same length that includes the correct cards having a property of clicked', () => {
      const wrapper = shallow( <App />);
    });
    
  });
});

