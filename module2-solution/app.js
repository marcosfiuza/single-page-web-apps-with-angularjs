(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('listCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'listCheckOffService'];
  AlreadyBoughtController.$inject = ['$scope', 'listCheckOffService'];

  function ToBuyController($scope, listCheckOffService) {
    $scope.items = listCheckOffService.getToBuyItems();
    $scope.boughtItem = function(index) {
      listCheckOffService.boughtItem(index);
    };
  }

  function AlreadyBoughtController($scope, listCheckOffService) {
    $scope.items = listCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var boughtItems = [];
    var toBuyItems = [
      { name: "Flight Tickets to Rio de Janeiro", quantity: 2 },
      { name: "Hostel Booking", quantity: 20 },
      { name: "Flamengo Jerseys", quantity: 2 },
      { name: "Flamengo Match Tickets", quantity: 2 },
      { name: "Caipirinhas", quantity: 20 }
    ];

    this.getToBuyItems = function() {
      return toBuyItems;
    };

    this.getBoughtItems = function() {
      return boughtItems;
    };

    this.boughtItem = function(index) {
      boughtItems.push(toBuyItems.splice(index, 1)[0]);
    }
  }
})();
