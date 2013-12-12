var SymSal = angular.module('SymSal',['ngRoute','ngCookies']).
 config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/static/views/main.html',
        controller: 'IndexCtrl'
      }).
      when('/login',{
      	templateUrl: '/static/views/login.html',
        controller: 'LoginCtrl'
      }).
      when('/register',{
      	templateUrl: '/static/views/register.html',
        controller: 'RegisterCtrl'
      }).
      otherwise({
        templateUrl: '/static/views/error.html'
      });
    $locationProvider.html5Mode(true);
  }]);
