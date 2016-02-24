var app = angular.module('jangular', ['ui.router', 'templates']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainController',
        resolve: { postPromise: ['posts', function(posts){
                return posts.getAll();
              }]}
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsController'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
