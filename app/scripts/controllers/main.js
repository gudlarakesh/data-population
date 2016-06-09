'use strict';

/**
 * @ngdoc function
 * @name dataPopulationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataPopulationApp
 */
angular.module('dataPopulationApp')
  .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject=['dataService'];

  function MainCtrl(dataService){
    var vm = this;
    vm.mySelect = {};
    vm.selectChange = selectChange;
    vm.populationResult = [];

    vm.mySelect = {
      country : "IN",
      year : "2010"
    }

    function selectChange(a,b){
      dataService.getPopulation(a,b).then(function(result){
        vm.populationResult = result;
      },function(error){
        console.log(error);
      })
    }

  }
