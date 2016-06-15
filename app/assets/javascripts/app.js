(function() {
  var app = angular.module("dapperNews", [
    'ui.router',
    'templates',
    'Devise',
    'posts',
    'MainController-module',
    'PostsController-module',
    'NavController-module',
    'AuthController-module'
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
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
      });
      $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }]
      });

      $urlRouterProvider.otherwise('home');
    }
  ]);
})();
