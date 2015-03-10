'use strict';

angular.module('goffeeAppApp')
  .controller('MainCtrl', function ($scope, $http, socket, $firebase, makeOrderService) {
    $scope.awesomeThings = [];
    debugger;


      $scope.newuser = {};
      $scope.fName = '';
      $scope.lName = '';
      $scope.passw1 = '';
      $scope.passw2 = '';
      $scope.school = '';
      $scope.email = '';
      $scope.feedback = '';
      $scope.feedback2 = '';
      $scope.feedback3 = '';

    //We can replace this with a Firebase url later on.
    var ref = new Firebase("https://feeback.firebaseio.com/");
    $scope.users = $firebase(ref.child("user")).$asArray();




    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

      $scope.successMsg = function(state_hidden) {
        debugger;
        if(state_hidden) {
                $scope.hide_message = true;
        } else {
            $scope.hide_message = true;
        }
      };

      $scope.makeOrder = function(type, shop, state_hidden) {
        debugger;
        makeOrderService.set(type, shop);
        // $scope.orderList = [];
        // $scope.order = {order_type: type, shop_name: shop, order_time: new Date()};
        // $scope.orderList.push($scope.order);

        if(state_hidden == 'hide_message') {
                $scope.hide_message = true;
        } else if (state_hidden == 'hide_message1') {
            $scope.hide_message1 = true;
        }
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
