var app = angular.module('jangular');

app.factory('posts', [
  function() {
    var o = {
      posts: []
    };
    return o;
  }
]);
