angular.module('appRoutes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('index', {
      url: "",
      templateUrl: "/app/views/home.html"
    })

    .state('users', {
      url: "/users",
      templateUrl: "/app/views/users.html"
    });
    
});