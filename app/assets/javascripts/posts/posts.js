(function() {
  var app = angular.module("posts", []);

  app.factory('posts', ['$http',
    function($http) {
      var o = {
        posts: []
      };
      o.getAll = function() {
        return $http.get('/posts.json').success(function(data) {
          angular.copy(data, o.posts);
        });
      };
      o.create = function(post) {
        return $http.post('/posts.json', post).success(function(data) {
          o.posts.push(data);
        });
      };
      o.upvote = function(post) {
        return $http.put('/posts/' + post.id + '/upvote.json').success(function(data) {
          post.upvotes += 1;
        });
      };
      o.get = function(id) {
        return $http.get('/posts/' + id + '.json').then(function(res) {
          return res.data;
        });
      };
      o.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
      };
      return o;
    }
  ]);
})();
