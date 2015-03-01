'use strict';

angular.module('myApp.routing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/medstudents', {
    templateUrl: 'partials/medstudents.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/physicians', {
    templateUrl: 'partials/physicians.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/socialwork', {
    templateUrl: 'partials/socialwork.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/occupationaltherapy', {
    templateUrl: 'partials/occupationaltherapy.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/about', {
    templateUrl: 'partials/services.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.when('/legal', {
    templateUrl: 'partials/legal.html',
    controller: 'RoutingCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('RoutingCtrl', [function() {
}]);