import React from 'react';
import { shallow } from 'enzyme';
import { ClickedContainer } from './ClickedContainer';

describe('ClickedContainer', ()=> {
  const mockAllDistricts = [];
  const mockAddClickedCard = jest.fn();
  const mockCompareDistrictAverages = jest.fn();
  const mockFindAverage = jest.fn();
  it('should match snapshot upon render', () => {
    const wrapper = shallow(<ClickedContainer
                              allDistricts={ mockAllDistricts }
                              addClickedCard={ mockAddClickedCard }
                              compareDistrictAverages={ mockCompareDistrictAverages }
                              findAverage={ mockFindAverage }
                            />);
    expect(wrapper).toMatchSnapshot();
  })





})