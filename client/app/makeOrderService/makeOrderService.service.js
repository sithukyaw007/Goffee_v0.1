'use strict';

angular.module('goffeeAppApp')
  .service('makeOrderService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var orderList = [];
    function set(type, shop) {
    	var order = {'order_type': type, 'shop_name': shop, 'order_time': new Date()};
    	orderList.push(order);
    }
    function get() {
    	return orderList;
    }

    return {
    	set: set,
    	get: get
    }
  });
