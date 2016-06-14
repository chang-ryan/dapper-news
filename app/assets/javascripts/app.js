(function() {
  var app = angular.module("dapperNews", [
    'ui.router',
    'templates',
    'posts',
    'MainController-module',
    'PostsController-module'
  ]);

  app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainController',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      });
      $stateProvider.state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsController',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      });

      $urlRouterProvider.otherwise('home');
    }
  ]);
})();
