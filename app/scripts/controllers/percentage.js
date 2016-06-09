'use strict';

/**
 * @ngdoc function
 * @name dataPopulationApp.controller:PercentageCtrl
 * @description
 * # PercentageCtrl
 * Controller of the dataPopulationApp
 */
angular.module('dataPopulationApp')
  .controller('PercentageCtrl', PercentageCtrl);

  PercentageCtrl.$inject= ['dataService','$scope'];

  function PercentageCtrl(dataService,$scope){
    var vm = this;
    var firstYearArray = [];
    vm.percentageYear = [];
    vm.percentagePopulation = [];
    var pop;
    vm.selectChange = selectChange;
    vm.mySelect = {
      country: "IN",
      yearOne: "2010",
      yearTwo: "2011",
    }

    function selectChange(a,b,c){
      var e = [];
      var f = [];
      var g = [];
      vm.percentagePopulation = [];
      dataService.getPopulation(a,b).then(function(firstYear){
        firstYear.shift();
        vm.percentageYear = firstYear;
        dataService.getPopulation(a,c).then(function(secondYear){
          secondYear.shift();
          for(var i = 0 ; i< firstYear.length; i++){
          var oneYear = parseInt(firstYear[i][3]);
          e.push(oneYear);
          var twoYear = parseInt(secondYear[i][3]);
          f.push(twoYear);
          g.push(secondYear[i][2]);
              pop = ((twoYear-oneYear)/oneYear)*100;
              vm.percentagePopulation.push(Math.ceil(pop));
          }
              console.log(g);
        $scope.labels = g;
        $scope.series = [b,c];
        $scope.data = [e,f];   
        }, function(error){
          console.log(error);
        })
      },function(error){
        console.log(error);
      });
    }

  } 
