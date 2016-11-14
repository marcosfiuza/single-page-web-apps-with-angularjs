(function() {
  "use strict";

  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "tpl/home.tpl.html"
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "tpl/categories.tpl.html",
        controller: "CategoriesController as categoriesCtrl",
        resolve: {
          categories: ["MenuDataService", function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state("categories.items", {
        url: "/{categoryId}",
        templateUrl: "tpl/items.tpl.html",
        controller: "ItemsController as itemsCtrl",
        resolve: {
          items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      });
  }
})();
