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
  
  MainCtrl.$inject=['dataService','$scope'];

  function MainCtrl(dataService,$scope){
    var vm = this;
    vm.mySelect = {};
    vm.selectChange = selectChange;
    vm.populationResult = [];
    vm.init = init;
    vm.year = [];


    function init(){
      var a = [];
      var b = [];
      dataService.getPopulation(vm.mySelect.country,vm.mySelect.year).then(function(result){
        result.shift()
        vm.populationResult = result;
        for(var i = 0; i< vm.populationResult.length; i++){
          a.push(vm.populationResult[i][2])
          b.push(vm.populationResult[i][3])
        }
        $scope.labels = a;
        $scope.series = ['Series A'];
        $scope.data = [b];
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
      var c = [];
      var d = [];
      dataService.getPopulation(a,b).then(function(result){
        result.shift()
        vm.populationResult = result;
        for(var i = 0; i< vm.populationResult.length; i++){
          a.push(vm.populationResult[i][2])
          b.push(vm.populationResult[i][3])
        }
        $scope.labels = c;
        $scope.series = ['Series A'];
        $scope.data = [d];
      },function(error){
        console.log(error);
      });
    }

  }
