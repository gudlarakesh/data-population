'use strict';

/**
 * @ngdoc service
 * @name dataPopulationApp.dataService
 * @description
 * # dataService
 * Service in the dataPopulationApp.
 */
angular.module('dataPopulationApp')
  .service('dataService', dataService);

  dataService.$inject = ["$http", "$q"];
  var key = "&key=5dce22df087bfacadcf521d2e8bd94d18de7a784"
  function dataService($http,$q){
    var service = {
      getPopulation : getPopulation
    }
    return service;

    function getPopulation(country,year){
      var d = $q.defer();
      var result = $http({
        method: 'GET',
        url: 'http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+ country + '&time=' + year +'&SEX=0' + key
      });
      result.success(function(data,status,header,config){
        d.resolve(data);
      });
      result.error(function(data,status,header,config){
        d.reject(data);
      });
      return d.promise;
    }
  }
