//wrap entire function in closure
(function(){
  //module takes app name and array of dependencies
  var app = angular.module('reviewsControllers', []);

  //controllers are where app's behavior is defined by functions and values
  //pass in anon. function - code in here is what will be executed when function is called

  app.controller('reviewsController', function(){
    this.review = {};
    // addReview function - takes single argument - resource
    this.addReview = function(resource){
      // get the resource's current reviews
      this.review.createdOn = Date.now();
      // push the controller's review (this.review) to the resource's reviews array
      resource.reviews.push(this.review);
      this.review = {}
    };

    this.formIsVisible = false;
    this.showReview = true;
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true;
    };


  });

  var reviews = [
  {
    name: 'Code School',
    author: 'Everett',
    link: 'https://www.codeschool.com/courses/shaping-up-with-angular-js',
    description: 'I found this tutorial really helpful.',
    languages: 'AngularJS',
    quality: 5,
    skillLevel: 1,
    canReview: true,
    comments: [
      {
        author: 'Matthew',
        description: 'Great tutorial',
        quality: 5,
        skillLevel: 2
      },
      {
        body: 'I thought this was pretty helpful',
        author: 'Sarah',
        quality: 4
      }
    ]
  },
  {
    name: 'Code Academy',
    author: 'Grace',
    link: 'https://www.codecademy.com/courses/learn-angularjs',
    description: 'It was ok, the the Code School on Angular was better.',
    languages: 'AngularJS',
    quality: 4,
    skillLevel: 1,
    canReview: true,
    comments: [
      {
        body: 'Not bad.',
        author: 'Barb',
        quality: 3
      },
      {
        body: 'Good starting place for beginners.',
        author: 'Sarah',
        quality: 4
      }
    ]
  }
];

})();
