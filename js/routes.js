(function(){
  var router = angular.module('reviewRouter', []);
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
        templateUrl: 'views/reviews/new.html',
        controller: 'newReviewController',
        controllerAs: 'newReviewCtrl'
      })
      // .
      // when("/reviews/:id", {
      //   templateUrl: 'views/reviews/show.html'
      // }).
      // when("/reviews/:id/edit", {
      //   templateUrl: 'views/reviews/edit.html'
      // }).
      // otherwise({
      //   redirectTo: "/reviews"
      // })
    }
  ])


})();
