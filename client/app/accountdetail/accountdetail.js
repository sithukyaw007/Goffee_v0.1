'use strict';

angular.module('fullstackAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accountdetail', {
        url: '/accountdetail',
        templateUrl: 'app/accountdetail/accountdetail.html',
        controller: 'AccountdetailCtrl'
      });
  });