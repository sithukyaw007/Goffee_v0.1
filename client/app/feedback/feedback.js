'use strict';

angular.module('goffeeAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        templateUrl: 'app/feedback/feedback.html',
        controller: 'FeedbackCtrl'
      });
  });