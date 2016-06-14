(function() {
  var app = angular.module("PostsController-module", []);

  app.controller("PostsController", ['$scope', 'posts', 'post',
    function($scope, posts, post) {
      $scope.post = post; // from posts state post resolve
      $scope.addComment = function() {
        if($scope.body === '') { return; }
        posts.addComment(post.id, {
          body: $scope.body,
          author: 'user',
        }).success(function(comment) {
          $scope.post.comments.push(comment);
        });
        $scope.body = '';
      };
      $scope.incrementUpvotes = function(comment) {
        posts.upvoteComment(post, comment);
      };
    }
  ]);
})();
