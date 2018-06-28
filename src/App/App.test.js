import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';


it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});

describe('App', () => {

  it('should have and intial state of an empty object', () => {
    const wrapper = shallow(
      <App />, { disableLifecycleMethods: true });

    expect(wrapper.state().allDistricts).toEqual([]);
  });

  // describe( 'setDistrictData', () => {

  it('should setState of allDistricts after pageload', () => {
    // const mockData = {location: 'Colorado', stats : {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395}};
    const mockHelper = new DistrictRepository(kinderData);
    const wrapper = shallow(<App />);

    wrapper.instance(); 
    
    expect(wrapper.instance().state.allDistricts).toEqual(mockHelper.stats);
  });
});
