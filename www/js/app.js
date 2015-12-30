// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services', 'ngCordova','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/social/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.denonces', {
      url: "/denonces",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/denonces.html",
          controller: 'DenoncesCtrl'
        }
      }
    })

    .state('app.newdenonce', {
      url: "/newdenonce",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/new-denonce.html",
          controller: 'NewDenonceCtrl'
        }
      }
    })

    .state('app.deputes', {
      url: "/deputes",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/deputes.html",
          controller: 'DeputesCtrl'
        }
      }
    })

    .state('app.depute', {
      url: "/depute/:deputeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/depute.html",
          controller: 'DeputeCtrl'
        }
      }
    })

    .state('app.question', {
      url: "/question",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/question.html",
          controller: 'QuestionCtrl'
        }
      }
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/denonces');
})
