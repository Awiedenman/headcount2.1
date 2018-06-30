import React from 'react';
import { shallow } from 'enzyme';
import { ComparisonCard } from './ComparisonCard';

describe('Comparison Card', () => {
  const mockRenderClickedCards = jest.fn();
  const mockCompareDistrictAverages = jest.fn();
  const mockFindAverage = jest.fn();
  it('should match snapshot upon render with two districts to compare', () => {
    const wrapper = shallow(<ComparisonCard
                            renderClickedCards={ mockRenderClickedCards }
                            compareDistrictAverages={ mockCompareDistrictAverages }
                            findAverage={ mockFindAverage }
                            />);
    expect(wrapper).toMatchSnapshot();
  })
})