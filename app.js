'use strict';
//wrap entire function in closure
(function(){
  //module takes app name and array of dependencies
  var app = angular.module('codelink', [
    // 'ui.bootstrap'
  ]);

  //controllers are where app's behavior is defined by functions and values
  //pass in anon. function - code in here is what will be executed when function is called
  app.controller('codelinkController', function(){
    //set recommendation to product, a property of the controller
    this.tools = reviews;
  });

  app.controller('panelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    //check to see if current tab is selected and set value
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };

  });

  app.controller('reviewController', function(){
    this.review = {};
    // addReview function - takes single argument - tool
    this.addReview = function(tool){
      // get the tool's current reviews
      this.review.createdOn = Date.now();
      // push the controller's review (this.review) to the tool's reviews array
      tool.reviews.push(this.review);
      this.review = {}
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
