(function() {
  "use strict";

  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", NarrowItDownFoundItemsDirective);

  NarrowItDownController.$inject = ["MenuSearchService"];
  MenuSearchService.$inject = ["$http"];

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (response) {
        return response.data.menu_items.filter(function(menuItem) {
          return menuItem.description.indexOf(searchTerm) != -1;
        });
      });
    };
  }

  function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.search = function() {
      if (!controller.searchTerm) {
        controller.found = [];
      } else {
        MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(response) {
          controller.found = response;
        });
      }
    };

    controller.remove = function(index) {
      controller.found.splice(index, 1);
    };
  }

  function NarrowItDownFoundItemsDirective() {
    return {
      restrict: "E",
      templateUrl: "foundItems.html",
      scope: {
        foundItems: "<",
        onRemove: "&"
      },
      controller: NarrowItDownFoundItemsDirectiveController,
      controllerAs: "foundItemsCtrl",
      bindToController: true,
      transclude: true
    };
  }

  function NarrowItDownFoundItemsDirectiveController() {
    var controller = this;

    controller.remove = function(index) {
      controller.onRemove({ index: index});
    };
  }
})();
