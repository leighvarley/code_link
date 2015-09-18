'use strict';

(function() {
  angular
  .module('codelink', [
    'ngRoute',
    'firebase',
  ])
  .config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider
      .when("/reviews", {
        templateUrl: 'views/index.html',
        controller: 'reviewIndexController',
        controllerAs: 'vm'
      })
      .when("/reviews/new", {
        templateUrl: 'views/save.html'
      })
      .when("/reviews/:id", {
        templateUrl: 'views/show.html'
      })
      .when("/reviews/:id/edit", {
        templateUrl: 'views/save.html'
      })
      .otherwise({
        redirectTo: "/reviews"
      })
    }
  ]);
})()
