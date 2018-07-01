import React from 'react';
import { SearchForm } from './SearchForm';
import { shallow, mount } from 'enzyme';

describe('SearchForm', () => {
  const mockShowSearchResults = jest.fn();

  it('matches the snapshot of the SearchForm', () => {
    const wrapper = shallow( 
      <SearchForm 
        showSearchResults={ mockShowSearchResults }
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call showSearchResults with an event.target.value as an argument', () => {
    const mockEvent = { event: { target : { value : 'input' }}};
    const wrapper = mount(<SearchForm 
      />);
      const spyChange = spyOn(wrapper.instance(), 'showSearchResults');

    wrapper.instance().simulate('change', 'mockEvent');

    expect(spyChange).toHaveBeenCalled(); 
  });
});