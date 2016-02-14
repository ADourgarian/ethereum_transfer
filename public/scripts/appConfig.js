// Angular module

// create our app. injecting ngRoute/ngTagsInput directives
var app = angular.module('ethereumTransfer', ['ngRoute', 'ui.bootstrap', 'ngTagsInput']);
//
//'ngAnimate',

// routes
// when just #/ ... goes to /pages/login.html, then use loginCtrl
app.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: '/pages/dash.html',
      controller: 'dashCtrl'
    })
}]);

// change otherwise to 404, 500
