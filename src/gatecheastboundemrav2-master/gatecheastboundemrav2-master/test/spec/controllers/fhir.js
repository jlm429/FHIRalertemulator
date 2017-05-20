'use strict';

describe('Controller: FhirCtrl', function () {

  // load the controller's module
  beforeEach(module('gatecheastboundemraApp'));

  var FhirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FhirCtrl = $controller('FhirCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
