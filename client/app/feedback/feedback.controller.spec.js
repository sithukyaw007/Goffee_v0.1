'use strict';

describe('Controller: FeedbackCtrl', function () {

  // load the controller's module
  beforeEach(module('goffeeAppApp'));

  var FeedbackCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedbackCtrl = $controller('FeedbackCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
