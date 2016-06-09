'use strict';

describe('Controller: IndiaCtrl', function () {

  // load the controller's module
  beforeEach(module('dataPopulationApp'));

  var IndiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndiaCtrl = $controller('IndiaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IndiaCtrl.awesomeThings.length).toBe(3);
  });
});
