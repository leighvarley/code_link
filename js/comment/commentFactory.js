(function() {
  angular
    .module('codelink')
    .factory("Comments", [
      "$firebase",
      Comments
    ]);

  function Comments($firebase){
    var factory = this;
    factory.for = function(review, comment){
      if(!comment) comment = {}
      var methods = {
        $create: create,
        $destroy: destroy
      }
      return angular.extend(comment, methods);

      function create(){
        if(!review.reviewcomments) review.comments = [];
        review.comments.push(this);
        return $firebase.update(review);
      }
      function destroy(){
        review.comments.splice(review.comments.indexOf(this), 1);
        return $firebase.update(review);
        // review.child("comments").$remove(this)
      }
    }
    return factory
  }

})();
