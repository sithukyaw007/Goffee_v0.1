'use strict';

angular.module('goffeeAppApp')
  .controller('OrderCtrl', function ($scope, makeOrderService) {
  debugger;
  if(makeOrderService.get().length > 0) {
  	$scope.orderList = makeOrderService.get();
  }

  console.log($scope.orderList);
    $scope.message = 'Hello';
  });
