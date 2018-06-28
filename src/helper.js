export default class DistrictRepository {
  constructor (schoolData) {
    this.stats = this.stopDuplicates(schoolData);
  }

  stopDuplicates(schoolData) {
    const cleanedData = schoolData.reduce((cleanedData, dataItem) => {
      if (!cleanedData[dataItem.Location]) {
        cleanedData[dataItem.Location] = [dataItem];
      } else {
        cleanedData[dataItem.Location].push(dataItem);
      }
      return cleanedData;
    }, {});
    const districtList = Object.keys(cleanedData).map(district => {
      return {location: district,
        stats: cleanedData[district].reduce((stats, year) => {
          stats[year.TimeFrame] = Math.round(year.Data * 1000) / 1000;
          return stats;
        }, {})
      };
    });
    return districtList;
  }

  findByName(location) {
    if (!location) {
      return undefined;
    }
    const cleanedLocation = location.toUpperCase();
    const foundName = this.stats.reduce((locationObj, district) => {
      if (district.location.toUpperCase() === cleanedLocation) {
        locationObj.location = district.location.toUpperCase();
        locationObj.stats =Object.keys(district.stats).reduce((statsObj, year) => {
          const roundedData = Math.round(district.stats[year] * 1000)/1000;
          statsObj[year] = roundedData || 0;
          return statsObj;
        }, {});
      }
      return locationObj;
    }, {});
    if (!foundName.location) {
      return undefined;
    }
    return foundName;
  }

  findAllMatches(location) {
    if (!location) {
      return Object.keys(this.stats);
    }
    const foundDistricts = Object.keys(this.stats).filter(district => {
      return district.toUpperCase().includes(location.toUpperCase());
    });
    return foundDistricts;
  }


}


