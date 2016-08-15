'use strict';

/**
 * @ngdoc overview
 * @name angularTestKarmaApp
 * @description
 * # angularTestKarmaApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestKarmaApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('',{
        templateUrl: 'views/recipient.html',
        controller: 'RecipientCtrl',
        controllerAs: 'recipient'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
