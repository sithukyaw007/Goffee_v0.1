'use strict';

angular.module('fullstackAppApp')
  .controller('OrderCtrl', function ($scope, makeOrderService) {
  debugger;
  if(makeOrderService.get().length > 0) {
  	$scope.orderList = makeOrderService.get();
  }

  console.log($scope.orderList);
    $scope.message = 'Hello';
  });
