'use strict';

/**
 * @ngdoc overview
 * @name dataPopulationApp
 * @description
 * # dataPopulationApp
 *
 * Main module of the application.
 */
angular
  .module('dataPopulationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/details', {
        templateUrl: 'views/detail.html',
        controller: 'PercentageCtrl',
        controllerAs: 'detail'
      })
      .when('/india', {
        templateUrl: 'views/india.html',
        controller: 'IndiaCtrl',
        controllerAs: 'india'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
