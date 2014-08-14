'use strict';

//Setting up route
angular.module('clash').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/calc/main.html'
    });
}
]);

//Setting HTML5 Location Mode
angular.module('clash').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
}
]);
