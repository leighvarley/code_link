(function(){
  angular
    .module('codelink')
    .directive('reviewShow', [
      "$routeParams",
      "Review",
      reviewShow
    ]);

  function reviewShow($routeParams, Review){
    return {
      templateUrl: "js/review/show/reviewShowView.html",
      link: function(scope, element, attributes){
        if(!scope.review){
          scope.review = Review.new({id: $routeParams.id})
          scope.showButtons = true;
        }
      }
    }
  }
})();
