var app = angular.module('jangular');

app.controller('PostsController', [
  '$scope',
  '$stateParams',
  'posts',

  function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function() {
      if ($scope.body === '') {
        return;
      } else {
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      }
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);
