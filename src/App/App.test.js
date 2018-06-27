import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import * as helper from '../helper';


it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});

describe('App', () => {

  it('should have and intial state of an empty object', () => {
    const wrapper = shallow(
      <App />, { disableLifecycleMethods: true });

    expect(wrapper.state().allDistricts).toEqual({});
  });

  // describe( 'setDistrictData', () => {

  //   it('should setState of allDistricts after pageload', () => {
  //     const mockData = {stats: { 
  //       'ACADEMY 20': [
  //         {Location: "ACADEMY 20", TimeFrame: 2007, DataFormat: "Percent", Data: 0.39159},
  //         {Location: "ACADEMY 20", TimeFrame: 2006, DataFormat: "Percent", Data: 0.35364},
  //         {Location: "ACADEMY 20", TimeFrame: 2005, DataFormat: "Percent", Data: 0.26709}
  //       ] }};
    
  //     const wrapper = shallow(
  //       <App 
  //         allDistricts={ mockData }
  //       />, { disableLifecycleMethods: true });

  //     helper.
  //     wrapper.instance().setDistrictData(); 
    
  //     expect(wrapper.instance().state().allDistricts).toEqual(mockData);
  //   });
  // });
});
