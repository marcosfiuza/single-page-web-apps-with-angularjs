(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.list = '';
    $scope.message = '';
    $scope.checkList = function() {
      var itemsCount = $scope.list.split(',').length;
      if ($scope.list == '') {
        $scope.message = 'Please enter data first';
      } else if (itemsCount <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  }
})();
