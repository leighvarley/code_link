(function() {
  angular
    .module('codelink')
    .factory('Review', [
      "$location",
      "$firebase",
      "Comments",
      Review
    ]);

  function Review($location, $firebase, Comments){
    var factory = this;
    var reviews = $firebase.data;
    factory.all = reviews;
    factory.new = instance;
    return factory;

    function instance(review){
      if(review.id) review.$id = review.id;
      var methods = {
        $create: create,
        $update: update,
        $destroy: destroy,
        comment: Comments.for(this)
      }
      return $firebase.new(review.$id, methods);

      function create(){
        return $firebase.create(this).then(function(response){
          review = response;
          $location.path("/reviews/" + response.key());
        });
      }
      function update(){
        return $firebase.update(this).then(function(response){
          $location.path("/reviews/" + response.key());
        });
      }
      function destroy(){
        return $firebase.destroy(this).then(function(){
          $location.path("/reviews");
        });
      }
    }
  }
})();
