//controllers are where app's behavior is defined by functions and values
//pass in anon. function - code in here is what will be executed when function is called
//wrap entire function in closure
(function(){
  //module takes app name and array of dependencies
  var reviewControllers = angular.module('reviewControllers', ['ngRoute']);

  // index controller
  reviewControllers.controller('reviewController', ['Review', function(Review) {
    this.review = Review.all;
  }]);

  // show controller (handles delete link on show page)
  reviewControllers.controller('reviewController', ['$routeParams','$location','$http', 'Grumble','Comment', function($routeParams, $location, $http, Review, Comment){
    this.review = Review.get({id: $routeParams.id}, function(review){
      review.comments = Comment.query({reviewId: $routeParams.id});
    });
    this.delete = function(id){
      Review.delete({id: id})
      $location.path("/review")
    }
    this.createComment = function(comment){
      var self = this
      Comment.save({grumbleId: $routeParams.id},comment, function(comment){
        self.review.comments.push(comment)
        self.comment = {}
      })
    }
  }]);

  // new form controller (handles creation)
  reviewControllers.controller('newReviewController', ["$location", 'Review', function($location, Review){
    this.create = function(){
      var self = this
      Review.save(this.grumble, function(id) {
        $location.path("/review/" + id);
      })
    }
  }])

  // edit form controller (handles update)
  reviewControllers.controller('editReviewController', ["$location","$routeParams", 'Grumble', function($location, $routeParams, Review){
    this.review = Review.get({id: $routeParams.id})
    this.update = function(){
      this.review.$save();
      $location.path("/reviews/" + this.review.$id)
    }
  }])
})();
