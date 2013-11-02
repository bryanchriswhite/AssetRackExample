require('../../shared/app');
require('../../shared/app/directives/lightbox');

angular.module('dashboard', ['shared'])
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/foo', {
          templateUrl: 'foo.html',
          controller : 'MainCtrl'
        })
        .when('/bar', {
          templateUrl: 'bar.html',
          controller : 'MainCtrl'
        })
        .when('/baz', {
          templateUrl: 'baz.html',
          controller : 'MainCtrl'
        })
    }
  ])
  .run(['$templateCache', angularTemplates]);
require('./controllers');
