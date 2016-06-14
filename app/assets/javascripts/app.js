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
        controller: 'MainController'
      });
      $stateProvider.state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsController'
      });

      $urlRouterProvider.otherwise('home');
    }
  ]);
})();
