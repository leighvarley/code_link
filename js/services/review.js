(function() {
  var reviewServices = angular.module('reviewServices', ['ngResource']);
  reviewServices.factory('Review', ['$firebaseObject','$firebaseArray', function($firebaseObject, $firebaseArray) {
    var ref = new Firebase(firebaseURL)
    var reviews = $firebaseArray(ref)
    var Review = {
      all: reviews,
      save: function( review, cb ){
        reviews.$add(review).then(function(ref) {
	  var id = ref.key();
	  cb(id)
	})
      },
      get: function (review, cb) {
	var found = $firebaseObject(ref.child(review.id));
	if(typeof cb == "function") cb(found)
        return found
      },
      delete: function(review, cb){
	return reviews.$remove(reviews.$getRecord(review.id))
      }
    }
    return Review
  }]);

})();
