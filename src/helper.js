export default class DistrictRepository {
  constructor(data) {
    this.stats = this.stopDuplicates(data);
  }

  stopDuplicates(data) {
    const cleanedData = data.reduce((cleanedData, dataItem) => {
      if(!cleanedData[dataItem.Location]) {
        cleanedData[dataItem.Location] = [dataItem];
      } else {
        cleanedData[dataItem.Location].push(dataItem);
      }
      return cleanedData
    }, {});

    return cleanedData;
  }

  findByName(location) {
    if(!location) {
      return undefined
    }
    const cleanedLocation = location.toUpperCase();
    const foundName = Object.keys(this.stats).reduce((locationObj, district) => {
      if(district.toUpperCase() === cleanedLocation) {
        locationObj.location = district.toUpperCase();
        locationObj.stats = this.stats[district].reduce((statsObj, year) => {
          const roundedData = Math.round(year.Data * 1000)/1000;
          statsObj[year.TimeFrame] = roundedData || 0;
          return statsObj
        }, {});
      }
      return locationObj
    }, {})
    if(!foundName.location) {
      return undefined;
    }
    return foundName
  }

  findAllMatches(location) {
    if(!location) {
      return Object.keys(this.stats)
    }
    const foundDistricts = Object.keys(this.stats).filter(district => {
      return district.toUpperCase().includes(location.toUpperCase())
    })
    return foundDistricts
  }


}


