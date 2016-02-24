var app = angular.module('jangular');


app.controller('MainController', [
  '$scope',
  'posts',

  function($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      } else {
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            { author: 'Ra', body: 'Manta!', upvotes: 5 },
            { author: 'An', body: 'Guapo!',  upvotes: 10 }
          ]
        });
        $scope.title = '';
        $scope.link = '';
      }
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);
