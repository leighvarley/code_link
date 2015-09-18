;(function(){
  var directives = angular.module('reviewDirectives',[]);
  directives.directive('review', function(){
    return {
      templateUrl: "views/reviews/_review.html"
    }
  });
})();
