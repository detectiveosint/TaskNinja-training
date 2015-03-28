'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .constant('FURL', 'https://myapp-ninja.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl:'views/browse.html',
        controller: 'TaskController'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskController'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'TaskController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
