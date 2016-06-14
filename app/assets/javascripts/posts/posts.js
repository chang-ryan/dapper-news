(function() {
  var app = angular.module("posts", []);

  app.factory('posts', [function() {
    var o = {
      posts: []
    };
    return o;
  }]);
})();
