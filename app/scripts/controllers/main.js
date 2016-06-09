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
    vm.init = init;
    vm.year = [];

    function init(){
      dataService.getPopulation(vm.mySelect.country,vm.mySelect.year).then(function(result){
        vm.populationResult = result;
      },function(error){
        console.log(error);
      });
    }

    vm.year = [2011,2012,2013,2014];

    vm.mySelect = {
      country : "IN",
      year : "2010"
    }

    function selectChange(a,b){
      dataService.getPopulation(a,b).then(function(result){
        vm.populationResult = result;
      },function(error){
        console.log(error);
      });
    }

  }
