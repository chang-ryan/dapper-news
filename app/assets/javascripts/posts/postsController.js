(function() {
  var app = angular.module("PostsController-module", []);

  app.controller("PostsController", ['$scope', '$stateParams', 'posts',
    function($scope, $stateParams, posts) {
      $scope.post = posts.posts[$stateParams.id];
      $scope.addComment = function(){
        if($scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
    }
  ]);
})();
