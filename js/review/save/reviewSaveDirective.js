(function(){
  angular
    .module('codelink')
    .directive('reviewSave', [
      "$routeParams",
      "Review",
      reviewSave
    ]);

  function reviewSave($routeParams, Review){
    return {
      templateUrl: "js/review/save/reviewSaveView.html",
      link: function(scope, element, attributes){
        scope.review = Review.new({id: $routeParams.id});
      }
    }
  }
})();
