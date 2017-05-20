'use strict';
/**
 * @ngdoc overview
 * @name gatecheastboundemraApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('gatecheastboundemraApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/fhir', {
        templateUrl: 'views/fhir.html',
        controller: 'FhirCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/alerts', {
        templateUrl: 'views/alerts.html',
        controller: 'AlertsCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
