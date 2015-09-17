(function(){
  var router = angular.module('reviewsRouter', []);
  router.config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider.
      when("/reviews", {
        templateUrl: 'views/reviews/index.html',
        controller: 'reviewsController',
        controllerAs: 'reviewsCtrl'
      }).
      when("/reviews/new", {
        templateUrl: 'views/reviews/new.html'
      }).
      when("/reviews/:id", {
        templateUrl: 'views/reviews/show.html'
      }).
      when("/reviews/:id/edit", {
        templateUrl: 'views/reviews/edit.html'
      }).
      otherwise({
        redirectTo: "/reviews"
      })
    }
  ])


})();
