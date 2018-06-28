
export default class DistrictRepository {
  constructor ( schoolData ) {
    this.stats = this.stopDuplicates( schoolData );
  }

  stopDuplicates( schoolData ) {
    const sanitizedData = schoolData.reduce(( sanitizedData, dataItem ) => {
      if (!sanitizedData[dataItem.Location]) {
        // console.log(dataItem)
        sanitizedData[dataItem.Location] = [dataItem];
      } else {
        sanitizedData[dataItem.Location].push(dataItem);
      }
      // console.log(sanitizedData);
      return sanitizedData;
    }, {});
    const districtList = Object.keys(sanitizedData).map(districtLocation => {
      return {location: districtLocation,
        stats: sanitizedData[districtLocation].reduce((districtStats, year) => {
          districtStats[year.TimeFrame] = Math.round(year.Data * 1000) / 1000;
          // console.log(districtStats)
          return districtStats;
        }, {})
      };
    });
    return districtList;
  }

  findByName(location) {
    if (!location) {
      return undefined;
    }
    const sanitizedLocation = location.toUpperCase();
    const foundName = this.stats.reduce((locationObj, district) => {
      if (district.location.toUpperCase() === sanitizedLocation) {
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
      return this.stats;
    }
    const foundDistricts = this.stats.filter(district => {
      return district.location.toUpperCase().includes(location.toUpperCase());
    });
    return foundDistricts;
  }

  findAverage(districtName){
    const sanitizedData = districtName.toUpperCase()
    const foundMatch = this.stats.find( district => {
      return district.location === sanitizedData;
    });
    const districtStatsAverage = Object.keys(foundMatch.stats).reduce(( sum, yearData) => {
      return sum += foundMatch.stats[yearData];
    }, 0)/ Object.keys(foundMatch.stats).length; 
    return Math.round(districtStatsAverage * 1000) / 1000;
  }

  compareDistrictAverages(location1, location2) {
    const average1 = this.findAverage( location1 );
    const average2 = this.findAverage(location2);
    const comparedAverage = {[location1]: average1, [location2]: average2, compared: Math.round(average1 / average2 * 1000) / 1000}
    return comparedAverage;   
  }
}



