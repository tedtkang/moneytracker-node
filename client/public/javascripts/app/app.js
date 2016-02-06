'use strict';

/**
 * Initialize the main module here and include the submodules as dependencies.
 * We add other configurations in the separate parts of the app itself
 */

angular.module('moneyTrackerApp', [
  'moneyTrackerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
