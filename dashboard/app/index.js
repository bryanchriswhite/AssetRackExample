require('../../shared/lib/angular/angular.min.js');
require('../../shared/app');
require('../../shared/app/directives/lightbox');

angular.module('dashboard', ['shared'])
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/foo', {
          templateUrl: '/dashboard/views/foo.html',
          controller : 'MainCtrl'
        })
        .when('/bar', {
          templateUrl: '/dashboard/views/bar.html',
          controller : 'MainCtrl'
        })
        .when('/baz', {
          templateUrl: '/dashboard/views/baz.html',
          controller : 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/foo'
        })
    }
  ])
  .run([
    '$templateCache', function($templateCache) {
      dashboardTemplates($templateCache);
      sharedTemplates($templateCache);
    }
  ]);
require('./controllers');
