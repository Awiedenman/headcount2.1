import React from 'react';
import { SearchForm } from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('matches the snapshot of the SearchForm', () => {
    const mockShowSearchResults = jest.fn();
    const wrapper = shallow( 
      <SearchForm 
        showSearchResults={ mockShowSearchResults }
      />);

    expect(wrapper).toMatchSnapshot();
  });
});