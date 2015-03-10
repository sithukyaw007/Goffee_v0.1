'use strict';

describe('Service: makeOrderService', function () {

  // load the service's module
  beforeEach(module('goffeeAppApp'));

  // instantiate service
  var makeOrderService;
  beforeEach(inject(function (_makeOrderService_) {
    makeOrderService = _makeOrderService_;
  }));

  it('should do something', function () {
    expect(!!makeOrderService).toBe(true);
  });

});
