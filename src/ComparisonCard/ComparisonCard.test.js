import React from 'react';
import { shallow } from 'enzyme';
import { ComparisonCard } from './ComparisonCard';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';


describe('Comparison Card', () => {
  let mockRenderClickedCards = [];
  const mockCompareDistrictAverages = jest.fn();
  it('should match snapshot upon render with two districts to compare', () => {
    const wrapper = shallow(<ComparisonCard
                            renderClickedCards={ mockRenderClickedCards }
                            compareDistrictAverages={ mockCompareDistrictAverages }
                            />);
    expect(wrapper).toMatchSnapshot();
  })
  it('should render comparison if renderClickedCards length is greater than 1', () => {
     const districtRepo = new DistrictRepository(kinderData)
    mockRenderClickedCards = [ { location: 'AGATE 300', stats: { 1945: .005, 1970: .804 } }, {location: 'Academy 20', stats: { 2003: .564, 2011: .999 } }]
    const wrapper = shallow(<ComparisonCard
                            renderClickedCards={ mockRenderClickedCards }
                            compareDistrictAverages={ districtRepo.compareDistrictAverages }
                            />);
    console.log(wrapper.find("h2").length)
    expect(wrapper.find('h2').length).toBeGreaterThan(1);
  })
  // it('should not render comparison if renderClickedCards length is not greater than 1', () => {
  //    const districtRepo = new DistrictRepository(kinderData)
  //   mockRenderClickedCards = [ {location: 'Academy 20', stats: { 2003: .564, 2011: .999 } }]
  //   const wrapper = shallow(<ComparisonCard
  //                           renderClickedCards={ mockRenderClickedCards }
  //                           compareDistrictAverages={ districtRepo.compareDistrictAverages }
  //                           />);
  //   console.log(wrapper.find("h2").length)
  //   expect(wrapper.find('h2').length).toEqual(0);
  // })
})