var app = angular.module('jangular');

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  $scope.test = 'Hola chico!';
  console.log('MainCtrl');
  $scope.posts = posts.posts;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
    });
    $scope.title = '';
    $scope.link = '';
  }; // addPost
}]);
