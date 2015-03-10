'use strict';

angular.module('goffeeAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingCtrl'
      });
  });