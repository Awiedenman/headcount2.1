import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

describe('limitClicked', () => {
  it('should track the number of cards clicked', () => {
    const mockClickedCards = [{ 
      location: 'Colorado', 
      clicked: true }, 
    { location: 'ACADEMY 20', 
      clicked: false 
    }];
    const districtRepository = new DistrictRepository(kinderData);

    expect(districtRepository.limitClicked(mockClickedCards)).toEqual(1);
  });

  it('should return 0 if no cards are clicked', () => {
    const mockClickedCards = [{ 
      location: 'Colorado', 
      clicked: false 
    }, 
    { location: 'ACADEMY 20', 
      clicked: false 
    }];
    const districtRepository = new DistrictRepository(kinderData);

    expect(districtRepository.limitClicked(mockClickedCards)).toEqual(0);

  });
});