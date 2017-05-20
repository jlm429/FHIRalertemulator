'use strict';

describe('Service: fhirservice', function () {

  // load the service's module
  beforeEach(module('gatecheastboundemraApp'));

  // instantiate service
  var fhirservice;
  beforeEach(inject(function (_fhirservice_) {
    fhirservice = _fhirservice_;
  }));

  it('should do something', function () {
    expect(!!fhirservice).toBe(true);
  });

});
