angular.module('shared').directive('lightbox', [
  '$timeout',
  function($timeout) {
    return {
      scope      : {},
      templateUrl: 'shared/views/lightbox.html',
      link       : function(scope, element, attrs) {
        scope.someValue = 'blah!';

        $timeout(function() {
          element.css({'background-color': 'purple'});
        }, 500);
      }
    }
  }
]);
