'use strict';

angular.module('fullstackAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('order', {
        url: '/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      });
  });