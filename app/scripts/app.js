'use strict';

/**
 * @ngdoc overview
 * @name metadataApp
 * @description
 * # metadataApp
 *
 * Main module of the application.
 */
angular
  .module('metadataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oauth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('metadataApp').config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
});
