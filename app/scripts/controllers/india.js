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

IndiaCtrl.$inject = ['dataService','$scope'];

 function IndiaCtrl(dataService,$scope){
  var vm = this;
  vm.init = init;
  vm.indiaMaleData = [];
  vm.indiaFemaleData = [];

  function init(){
    var a = [];
    var b = [];
    var c = [];
    dataService.getMale().then(function(result){
      result.shift();
      vm.indiaMaleData=result;
      dataService.getFemale().then(function(result){
        result.shift()
        vm.indiaFemaleData=result;
        for(var i = 0; i < vm.indiaFemaleData.length ; i++){
          a.push(vm.indiaMaleData[i][3]);
          b.push(vm.indiaFemaleData[i][3]);
          c.push(vm.indiaMaleData[i][2]);
        }
        $scope.labels = c;
        $scope.series = ["Males","Females"];
        $scope.data = [a,b]; 
      },function(error){
        console.log(error);
      });
    },function(error){
      console.log(error);
    });
  }
 }