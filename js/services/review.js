(function() {
  var reviewServices = angular.module('reviewServices', ['ngResource', 'firebase']);

  // Check connection
  var firebaseUrl = "https://codelink.firebaseio.com/";
  var connectedRef = new Firebase(firebaseUrl + "/.info/connected");
  connectedRef.on("value", function(snapshot) {
    if (snapshot.val() === true) {
      console.log("Connected to firebase:", firebaseUrl );
    } else {
      console.log("Not connected to firebase:", firebaseUrl);
    }
  });



})();
