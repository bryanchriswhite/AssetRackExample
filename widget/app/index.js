require('../../shared/lib/angular/angular.min.js');
require('../../shared/app');
require('../../shared/app/directives/lightbox');

angular.module('widget', ['shared'])
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/one', {
          templateUrl: '/view1.html',
          controller : 'MainCtrl'
        })
        .when('/two', {
          templateUrl: '/view2.html',
          controller : 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/one'
        })
    }
  ])
  .run(['$templateCache', function($templateCache) {
    widgetTemplates($templateCache);
    sharedTemplates($templateCache);
  }]);
require('./controllers');
