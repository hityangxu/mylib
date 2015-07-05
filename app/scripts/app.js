'use strict';

/**
 * @ngdoc overview
 * @name mylibApp
 * @description
 * # mylibApp
 *
 * Main module of the application.
 */
angular
  .module('mylibApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/html5test', {
        templateUrl: 'views/html5test.html',
        controller: 'Html5TestCtrl',
        controllerAs: 'html5test'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
