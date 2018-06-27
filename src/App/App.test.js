import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


// it.skip('renders without crashing', () => {
//   const div = document.createElement('div');
//   // ReactDOM.render(<App />, div);
// });

describe('App', () => {

  it('should have and intial state of an empty object', () => {
    const mockData = {stats: { 
      'ACADEMY 20': [
        {Location: "ACADEMY 20", TimeFrame: 2007, DataFormat: "Percent", Data: 0.39159},
        {Location: "ACADEMY 20", TimeFrame: 2006, DataFormat: "Percent", Data: 0.35364},
        {Location: "ACADEMY 20", TimeFrame: 2005, DataFormat: "Percent", Data: 0.26709}
      ] }};
    const wrapper = shallow(
      <App />, { disableLifecycleMethods: true });

    expect(wrapper.state().allDistricts).toEqual({});
  });
  

});
