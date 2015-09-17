//controllers are where app's behavior is defined by functions and values
//pass in anon. function - code in here is what will be executed when function is called
//wrap entire function in closure
(function(){
  var app = angular.module('reviewsControllers', [])
  //module takes app name and array of dependencies
  app.controller('reviewController', function(){

  this.reviews =  [
    {
      "name": 'Code School',
      "author": 'Everett',
      "link": 'https://www.codeschool.com/courses/shaping-up-with-angular-js',
      "description": 'I found this tutorial really helpful.',
      "languages": 'AngularJS',
      "quality": 5,
      "skillLevel": 1,
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
    },
    {
      "name": 'Code Academy',
      "author": 'Grace',
      "link": 'https://www.codecademy.com/courses/learn-angularjs',
      "description": 'It was ok, the the Code School on Angular was better.',
      "languages": 'AngularJS',
      "quality": 4,
      "skillLevel": 1,
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
    }
  ];

  this.create = function(){
    this.reviews.unshift({
      resourceName: this.resourceName,
      link: this.link,
      skillLevel: this.skillLevel,
      languages: this.languages,
      description: this.description,
      quality: this.quality,
    })
    this.reset()
  }

    this.formIsVisible = false;
    this.showReview = true;
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true;
    };

  });

})()
