//controllers are where app's behavior is defined by functions and values
//pass in anon. function - code in here is what will be executed when function is called
//wrap entire function in closure
(function(){
  //module takes app name and array of dependencies
  var reviewControllers = angular.module('reviewControllers', ['ngRoute']);

  // index controller
  reviewControllers.controller('reviewsController', ['Review', function(Review) {
    this.reviews = Review.query();
  }]);

  // show controller (inc link to delete)
    // reviewControllers.controller('reviewController', ['$routeParams','$location', 'Review','Comment'], function($routeParams, $location, Review){
    //   this.grumble = Review.get({$id: $routeParams.id});
    //   this.delete = function(id){
    //     Review.delete({$id: id}, function(){
    //       $location.path("/reviews");
    //     });
    //   };

  // new form controller
   reviewControllers.controller('newReviewController', ["$location", 'Review', function($location, Review){
     this.create = function(){
       Review.save(this.review, function(review) {
         $location.path("/reviews/" + review.$id);
       });
     };
   }]);

   // edit form controller
   reviewControllers.controller('editGrumbleController', ["$location","$routeParams", 'Review', function($location, $routeParams, Review){
     this.grumble = Review.get({$id: $routeParams.id});
     this.update = function(){
       this.review.$save();
       $location.path("/reviews/" + this.review.$id);
     };
   }]);
 })();


  // this.reviews =  [
  //   {
  //     "name": 'Code School',
  //     "author": 'Everett',
  //     "link": 'https://www.codeschool.com/courses/shaping-up-with-angular-js',
  //     "description": 'I found this tutorial really helpful.',
  //     "languages": 'AngularJS',
  //     "quality": 5,
  //     "skillLevel": 1,
      // canReview: true,
      // comments: [
      //   {
      //     author: 'Matthew',
      //     description: 'Great tutorial',
      //     quality: 5,
      //     skillLevel: 2
      //   },
      //   {
      //     body: 'I thought this was pretty helpful',
      //     author: 'Sarah',
      //     quality: 4
      //   }
      // ]
    // },
    // {
    //   "name": 'Code Academy',
    //   "author": 'Grace',
    //   "link": 'https://www.codecademy.com/courses/learn-angularjs',
    //   "description": 'It was ok, the the Code School on Angular was better.',
    //   "languages": 'AngularJS',
    //   "quality": 4,
    //   "skillLevel": 1,
      // canReview: true,
      // comments: [
      //   {
      //     body: 'Not bad.',
      //     author: 'Barb',
      //     quality: 3
      //   },
      //   {
      //     body: 'Good starting place for beginners.',
      //     author: 'Sarah',
      //     quality: 4
      //   }
      // ]
  //   }
  // ];
  //
  // this.create = function(){
  //   this.reviews.unshift({
  //     resourceName: this.resourceName,
  //     link: this.link,
  //     skillLevel: this.skillLevel,
  //     languages: this.languages,
  //     description: this.description,
  //     quality: this.quality,
  //   })
  //   this.reset()
  // }
  //
  //   this.formIsVisible = false;
  //   this.showReview = true;
  //   this.toggleForm = function(){
  //     this.formIsVisible = this.formIsVisible ? false : true;
  //   };
  //
  // });

// })
// ()
