'use strict';

/**
 * @ngdoc function
 * @name dataPopulationApp.controller:IndiaCtrl
 * @description
 * # IndiaCtrl
 * Controller of the dataPopulationApp
 */
angular.module('dataPopulationApp')
  .controller('IndiaCtrl', IndiaCtrl)

IndiaCtrl.$inject = ['dataService'];

 function IndiaCtrl(dataService){
  var vm = this;
  vm.init = init;
  vm.indiaMaleData = [];
  vm.indiaFemaleData = [];

  function init(){
    dataService.getMale().then(function(result){
      result.shift();
      vm.indiaMaleData=result;
      console.log(result);
      dataService.getFemale().then(function(result){
        result.shift()
        vm.indiaFemaleData=result;
        console.log(result);
      },function(error){
        console.log(error);
      });
    },function(error){
      console.log(error);
    });
  }
 }