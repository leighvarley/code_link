(function() {
  angular
    .module('codelink')
    .controller('reviewIndexController', ['Review', reviewIndexController]);

  function reviewIndexController(Review){
    this.reviews = Review.all;
  }
})();
