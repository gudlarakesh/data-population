'use strict';

describe('Controller: PercentageCtrl', function () {

  // load the controller's module
  beforeEach(module('dataPopulationApp'));

  var PercentageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PercentageCtrl = $controller('PercentageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PercentageCtrl.awesomeThings.length).toBe(3);
  });
});
