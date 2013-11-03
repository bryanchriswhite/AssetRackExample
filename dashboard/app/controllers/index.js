angular.module('dashboard')
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.greeting = 'hello there!!';
      console.log('hello from main controller!')
    }
  ]);
